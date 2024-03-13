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

export const IndividualModuleScreen = ({ route }) => {
  const { id, trainingTitle } = route.params;
  const navigation = useNavigation();

  const module = useAppStore((state) => state.getModuleData);

  return (
    <View className="items-start max-h-max overflow-scroll relative">
      <Header trainingTitle={trainingTitle} />
      <ScrollView className="w-full px-16">
        {module(id).map((item, index) => (
          <View key={index} className={`mb-8 ${index === 0 ? 'mt-16' : ''}`}>
            <Text className="text-2xl font-extrabold text-purple-800 mb-1">
              TOPIC {item.id}: {item.title}
            </Text>
            <Text className="text-lg font-semibold text-gray-600 mb-4">
              {item.titleDescription}
            </Text>
            <Text className="text-base font-normal text-gray-800 leading-relaxed">
              {item.content}
            </Text>
            {index === module(id).length - 1 && (
              <View className="w-[262px] mt-10">
                <TouchableOpacity
                  onPress={() => navigation.navigate('Chat')}
                  className="bg-[#F0F2F4] px-12 py-3 rounded-lg"
                >
                  <Text className="text-[#9E53DA] text-center font-bold">
                    Ask Question To ProdAi
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
