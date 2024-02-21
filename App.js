// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import { PaperProvider } from 'react-native-paper';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
}
function HomeScreen() {
  return (
    <View className="flex items-center justify-center">
      <Text className="text-red-400">Home Screen</Text>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </View>
  );
}
function DetailsScreen() {
  return (
    <View className="flex items-center justify-center">
      <Text className="text-red-400">Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <MyTabs />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
