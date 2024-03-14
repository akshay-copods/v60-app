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
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { IndividualModuleScreen } from './screens/IndividualModuleScreen';
import { Onboarding } from './screens/onboarding';
import { ExpertsScreen } from './screens/ExpertsScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LoginStack() {
  return (
    <>
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
    </>
  );
}

function HomeStack() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: '#fbf6ff' }}
      screenOptions={{
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
        tabBarItemStyle: {
          alignContent: 'center',
          justifyContent: 'center',
        },
        tabBarLabel: (tab) => {
          return (
            <Text
              style={{
                color: tab.focused ? '#9E53DA' : '#737E93',
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: 20,
              }}
            >
              {tab.children}
            </Text>
          );
        },
      }}
      initialRouteName="Experts"
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="graduation-cap"
              size={20}
              color={focused ? '#9E53DA' : '#737E93'}
            />
          ),
        }}
        name="Training"
        component={DetailsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="graduation-cap"
              size={20}
              color={focused ? '#9E53DA' : '#737E93'}
            />
          ),
        }}
        name="Experts"
        component={ExpertsScreen}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="chat"
              size={20}
              color={focused ? '#9E53DA' : '#737E93'}
            />
          ),
        }}
      />
    </Tab.Navigator>
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
          <Stack.Navigator
            initialRouteName={!isSignedIn ? 'login' : 'training'}
          >
            {false ? (
              LoginStack()
            ) : (
              <>
                {/* <Stack.Screen
                  name="onboarding"
                  options={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#fbf6ff' },
                  }}
                  component={Onboarding}
                /> */}
                <Stack.Screen
                  name="training"
                  options={{ headerShown: false }}
                  component={HomeStack}
                />
                <Stack.Screen
                  name="individual_module"
                  options={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#fbf6ff' },
                  }}
                  component={IndividualModuleScreen}
                />
              </>
            )}
          </Stack.Navigator>
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
