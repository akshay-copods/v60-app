import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function RegisterScreen() {
  const [details, setDetails] = useState({
    username: '',
    password: '',
  });
  const [password, showPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  async function addUser(details) {
    const docRef = await addDoc(collection(db, 'users'), {
      username: details.username,
      password: details.password,
    });
    console.log('Document written with ID: ', docRef.id);
  }
  const navigation = useNavigation();

  return (
    <View className="flex items-center justify-center h-full gap-4 w-64 m-auto">
      {loading ? (
        <ActivityIndicator animating={true} color={MD2Colors.purple300} />
      ) : (
        <>
          <Text className="text-2xl font-bold self-start">Register</Text>
          <View className="gap-2 w-full">
            <Text className="text-[10px] text-[#5F6A80]">Employee ID</Text>
            <TextInput
              placeholder="Enter Employee ID"
              value={details.username}
              onChangeText={(text) =>
                setDetails({ ...details, username: text })
              }
              className="w-full bg-transparent h-9 text-xs"
              textColor="#5F6A80"
              mode="outlined"
            />
          </View>
          <View className="gap-2 w-full">
            <Text className="text-[10px] text-[#5F6A80]">Password</Text>
            <TextInput
              placeholder="Enter Employee ID"
              value={details.username}
              onChangeText={(text) =>
                setDetails({ ...details, password: text })
              }
              className="w-full bg-transparent h-9 text-xs"
              textColor="#5F6A80"
              mode="outlined"
            />
          </View>
          <View className="flex w-full">
            <TouchableOpacity
              onPress={() => addUser(details)}
              className="bg-[#9E53DA] py-2 px-4 h-9 rounded"
            >
              <Text className="text-white self-center">Sign In</Text>
            </TouchableOpacity>
          </View>
          <View className="flex w-full">
            <TouchableOpacity
              onPress={() => navigation.navigate('login')}
              className="bg-[#F1F1F1] py-2 px-4 h-9 rounded"
            >
              <Text className="text-[#5F6A80] self-center">
                Already have an account? Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
