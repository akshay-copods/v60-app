import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, MD2Colors, TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { useAppStore } from '../store';

export function LoginScreen({ f }) {
  const [details, setDetails] = useState({
    username: '',
    password: '',
  });

  const [password, showPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const signIn = useAppStore((state) => state.signIn);
  const setSignedInUser = useAppStore((state) => state.setSignedInUser);
  const navigation = useNavigation();
  const setModules = useAppStore((state) => state.setModuleData);
  const setMachineName = useAppStore((state) => state.setMachineName);

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
      fetchData();
      setLoading(false);
      setSignedInUser(details.username);
      signIn();
    } else {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Sign in failed.',
        text2: 'User not found or password incorrect.',
      });
    }
  }

  async function fetchData() {
    setLoading(true);
    const docRef = doc(db, 'modules', 'jqUoTZYfM9fzJ1h6ReMt');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const formattedModules = docSnap.data()?.modules.map((module, i) => {
        return {
          ...module,
          status: i === 0 ? 'PENDING' : 'LOCKED',
          assessment: {
            ...module.assessment,
            status: 'PENDING',
          },
        };
      });
      const machineName = docSnap.data()?.machineName;

      setMachineName(machineName);
      setModules(formattedModules);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }

  return (
    <View className="flex items-center justify-center h-full w-64 m-auto">
      {loading ? (
        <ActivityIndicator animating={true} color={MD2Colors.purple300} />
      ) : (
        <>
          <Text className="text-2xl font-bold self-start">Sign In</Text>
          <View className="w-full mt-5">
            <Text className="text-[10px] text-[#5F6A80]">Employee ID</Text>
            <TextInput
              placeholder="Enter Employee ID"
              value={details.username}
              onChangeText={(text) =>
                setDetails({ ...details, username: text })
              }
              className="w-full bg-transparent h-9 text-xs mt-1"
              textColor="#5F6A80"
              mode="outlined"
            />
          </View>
          <View className="w-full mt-5">
            <Text className="text-[10px] text-[#5F6A80]">Password</Text>
            <TextInput
              value={details.password}
              onChangeText={(text) =>
                setDetails({ ...details, password: text })
              }
              placeholder="Enter Password"
              className="w-full bg-transparent h-9 text-xs mt-1"
              textColor="#5F6A80"
              mode="outlined"
              secureTextEntry={password}
              right={
                <TextInput.Icon
                  icon="eye"
                  style={{ marginTop: 5, marginLeft: 20 }}
                  onPress={() => showPassword(!password)}
                  size={20}
                />
              }
            />
          </View>
          <View className="flex w-full mt-5">
            <TouchableOpacity
              onPress={() => loginUser(details)}
              className="bg-[#9E53DA] py-2 px-4 h-9 rounded"
            >
              <Text className="text-white self-center">Sign In</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('register')}
            className="py-2 px-4 h-9 rounded"
          >
            <Text className="text-[#5F6A80] self-center">
              Create an account
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
