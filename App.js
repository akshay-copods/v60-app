// In App.js in a new project
import * as React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { PaperProvider } from 'react-native-paper';
import LoginScreen from './screens/LoginScreen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
        {/* <Tab.Screen name="Details" component={DetailsScreen} /> */}
        <Tab.Screen name="Login" component={LoginScreen} />
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

  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView className="flex-1 bg-[#FBF6FF] flex justify-center">
          <StatusBar
            barStyle="light-content"
            hidden={true}
            backgroundColor="#FBF6FF"
            translucent={false}
          />

          <Tab.Navigator tabBar={() => null} initialRouteName="Login">
            <Tab.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
          </Tab.Navigator>
          <Toast />
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
