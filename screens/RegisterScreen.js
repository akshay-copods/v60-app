import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export function RegisterScreen() {
  const [details, setDetails] = useState({
    username: '',
    password: '',
  });
  async function addUser(details) {
    const docRef = await addDoc(collection(db, 'users'), {
      username: details.username,
      password: details.password,
    });
    console.log('Document written with ID: ', docRef.id);
  }

  return (
    <View className="flex items-center justify-center">
      <TextInput
        value={details.username}
        onChangeText={(text) => setDetails({ ...details, username: text })}
        placeholder="Username"
      />
      <TextInput
        value={details.password}
        onChangeText={(text) => setDetails({ ...details, password: text })}
        placeholder="Password"
      />
      <TouchableOpacity
        onPress={() => addUser(details)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
