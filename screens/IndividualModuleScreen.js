import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppStore } from '../store';
import { Header } from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Avatar } from 'react-native-paper';

export const IndividualModuleScreen = ({ route }) => {
  const { id, trainingTitle } = route.params;
  const [activeModule, setActiveModule] = useState(0);
  const navigation = useNavigation();

  const module = useAppStore((state) => state.getModuleData);

  const moduleData = module(id);

  return (
    <View className="items-start max-h-max overflow-scroll relative">
      <Header trainingTitle={trainingTitle} />
      <View className="flex-row px-10">
        <View className="pt-16 pr-8">
          <Avatar.Image
            size={64}
            source={require('../assets/onboarding.png')}
          />
        </View>
        <ScrollView className="w-full">
          <View key={moduleData[activeModule].id} className="pt-8">
            <Text className="text-2xl font-extrabold text-purple-800 mb-4">
              TOPIC {moduleData[activeModule].id}:{' '}
              {moduleData[activeModule].title}
            </Text>
            <Text className="text-lg font-semibold text-gray-600 mb-8">
              {moduleData[activeModule].titleDescription}
            </Text>
            <Text className="text-base font-normal text-gray-800 leading-relaxed">
              {moduleData[activeModule].content}
            </Text>
            {/* {moduleData[activeModule].id === module(id).length - 1 && ( */}
            <View className="mt-10">
              <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                className="bg-[#F0F2F4] px-12 py-3 rounded-lg w-[262px]"
              >
                <Text className="text-[#9E53DA] text-center font-bold">
                  Ask Question To ProdAi
                </Text>
              </TouchableOpacity>
            </View>
            {/* )} */}
            {/* {moduleData[activeModule].id !== module(id).length - 1 && ()} */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
