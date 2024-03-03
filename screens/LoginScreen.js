import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function LoginScreen() {
  const [details, setDetails] = useState({
    username: '',
    password: '',
  });
  const navigation = useNavigation();
  async function loginUser(details) {
    const usersRef = collection(db, 'users');
    const q = query(
      usersRef,
      where('username', '==', details.username),
      where('password', '==', details.password)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
      // User found
      console.log('User logged in successfully.');
      navigation.navigate('Details');
      // Here, you could return user details or perform further actions as needed
    } else {
      // No user found
      console.log('Login failed: User not found or password incorrect.');
    }
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
        onPress={() => loginUser(details)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
