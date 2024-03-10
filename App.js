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
import { Platform, StyleSheet, Text, View } from 'react-native';
import { DetailsScreen } from './screens/DetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { useAppStore } from './store';
import { ChatScreen } from './screens/ChatScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ cardStyle: { backgroundColor: '#fbf6ff' } }}
    >
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

  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#eee"
          translucent={false}
        />

        <SafeAreaView style={style.droidSafeArea}>
          {isSignedIn ? (
            <LoginStack />
          ) : (
            <Tab.Navigator
              screenOptions={{
                cardStyle: { backgroundColor: '#fbf6ff' },
                tabBarStyle: {
                  backgroundColor: '#FFFFFF',
                  position: 'absolute',
                  bottom: 25,
                  left: 240,
                  right: 0,
                  borderRadius: 16,
                  borderColor: '#737E93',
                  borderWidth: 1,
                  width: 791,
                  height: 64,
                  shadowColor: '#fff',
                },
              }}
              initialRouteName="details"
            >
              <Tab.Screen
                options={{ headerShown: false }}
                name="details"
                component={DetailsScreen}
              />
              <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{ tabBarStyle: { display: 'none' } }}
              />
            </Tab.Navigator>
          )}
        </SafeAreaView>
        <Toast />
      </PaperProvider>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
    justifyContent: 'center',
  },
});

export default App;
