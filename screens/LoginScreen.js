import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, MD2Colors, TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';

function LoginScreen() {
  const [details, setDetails] = useState({
    username: '',
    password: '',
  });
  const [password, showPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function loginUser(details) {
    if (!details.username || !details.password) {
      return Toast.show({
        type: 'error',
        text1: 'Please enter username and password.',
      });
    }

    setLoading(true);

    const usersRef = collection(db, 'users');
    const q = query(
      usersRef,
      where('username', '==', details.username),
      where('password', '==', details.password)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
      // User found
      Toast.show({
        type: 'success',
        text1: 'Sign in successful.',
        text2: 'Welcome to Machineator!',
      });

      setLoading(false);
      navigation.navigate('Details');
    } else {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Sign in failed.',
        text2: 'User not found or password incorrect.',
      });
    }
  }

  return (
    <View className="flex items-center justify-center h-full gap-4 w-64 m-auto">
      {loading ? (
        <ActivityIndicator animating={true} color={MD2Colors.purple300} />
      ) : (
        <>
          <Text className="text-2xl font-bold self-start">Sign In</Text>
          <TextInput
            placeholder="Enter Employee ID"
            value={details.username}
            onChangeText={(text) => setDetails({ ...details, username: text })}
            className="w-full bg-transparent h-9 text-sm"
            mode="outlined"
            label="Employee ID"
          />
          <TextInput
            value={details.password}
            onChangeText={(text) => setDetails({ ...details, password: text })}
            placeholder="Enter Password"
            className="w-full bg-transparent h-9 text-sm"
            mode="outlined"
            label="Password"
            secureTextEntry={password}
            right={
              <TextInput.Icon
                icon="eye"
                style={{ marginTop: 14 }}
                onPress={() => showPassword(!password)}
              />
            }
          />
          <View className="flex w-full">
            <TouchableOpacity
              onPress={() => loginUser(details)}
              className="bg-[#9E53DA] py-2 px-4 h-9 rounded"
            >
              <Text className="text-white self-center">Sign In</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

export default LoginScreen;
