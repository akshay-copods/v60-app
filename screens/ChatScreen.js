import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

import { db, functions } from '../firebaseConfig';

export function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesCollection = collection(db, 'chats');
    const q = query(messagesCollection, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === 'added')
        .map(({ doc }) => {
          const firebaseData = doc.data();
          const data = {
            _id: doc.id,
            text: firebaseData.text,
            createdAt: new Date().getTime(),
            user: { ...firebaseData.user },
          };
          return data;
        });
      appendMessages(messagesFirestore);
    });

    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [messages]
  );
  const sendMessageToCloudFunction = async (message) => {
    try {
      const callCloud = httpsCallable(functions, 'capitalizeMessage');
      callCloud(message).then((result) => {
        console.log('Cloud function result:', result);
      });
    } catch (error) {
      console.error('Error sending message to cloud function:', error);
    }
  };
  const onSend = useCallback((messages = []) => {
    messages.forEach((message) => {
      sendMessageToCloudFunction(message);
      addDoc(collection(db, 'chats'), {
        ...message,
        createdAt: serverTimestamp(),
        id: Math.random(),
      });
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{ _id: 2, name: 'User 2' }}
    />
  );
}
