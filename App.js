import 'react-native-gesture-handler';
import * as React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { PaperProvider } from 'react-native-paper';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { DetailsScreen } from './screens/DetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppStore } from './store';
import { ChatScreen } from './screens/ChatScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function LoginStack() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="register"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
}
function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="details">
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
        {/* <Tab.Screen name="Details" component={DetailsScreen} /> */}
        <Tab.Screen name="Login" component={<LoginScreen f={'f'} />} />
        {/* <Tab.Screen name="Register" component={RegisterScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function App() {
  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    }
    changeScreenOrientation();
  }, []);
  const isSignedIn = useAppStore((state) => state.isSignedIn);
  console.log(isSignedIn);
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#eee"
          translucent={false}
        />

        {!isSignedIn ? (
          LoginStack()
        ) : (
          <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: '#fbf6ff' }}
            initialRouteName="details"
          >
            <Tab.Screen
              options={{ headerShown: false }}
              name="details"
              component={DetailsScreen}
            />
            <Tab.Screen name="Chat" component={ChatScreen} />
          </Tab.Navigator>
        )}
        <Toast />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
