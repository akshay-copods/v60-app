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
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { httpsCallable } from 'firebase/functions';
import { useNavigation } from '@react-navigation/native';
import { db, functions } from '../firebaseConfig';
import { Text, TouchableOpacity, View } from 'react-native';

export function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigation();
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
    setIsTyping(true);
    try {
      const callCloud = httpsCallable(functions, 'capitalizeMessage');
      callCloud(message).then((result) => {
        console.log('Cloud function result:', result);
        setIsTyping(false);
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
        createdAt: Date.now(),
        id: Math.random(),
      });
    });
  }, []);

  return (
    <>
      <View className="flex-row justify-between items-center w-full p-4 bg-white">
        <Text className="text-[#3A4355] text-3xl font-semibold">Chat</Text>
        <View className="flex-row">
          <TouchableOpacity
            onPress={() => navigate.goBack()}
            className="h-5 w-5 items-center justify-center"
          >
            <MaterialIcons name="cancel" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <GiftedChat
        isTyping={isTyping}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{ _id: 2, name: 'User 2' }}
      />
    </>
  );
}
