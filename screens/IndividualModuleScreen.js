import { FlatList, Text, View } from 'react-native';
import { useAppStore } from '../store';
import { Header } from '../components/Header';

export const IndividualModuleScreen = ({ route, navigation }) => {
  const { id, trainingTitle } = route.params;

  const module = useAppStore((state) => state.getModuleData);

  console.log(module);

  return (
    <View className="items-start h-full overflow-scroll border relative">
      <Header trainingTitle={trainingTitle} />
      <FlatList
        data={module(id)}
        renderItem={({ item }) => (
          <View className="mb-8 px-4">
            <Text className="text-2xl font-extrabold text-purple-800 mb-1">
              TOPIC {item.id}: {item.title}
            </Text>
            <Text className="text-lg font-semibold text-gray-600 mb-4">
              {item.titleDescription}
            </Text>
            <Text className="text-base font-normal text-gray-800 leading-relaxed">
              {item.content}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        className="w-full px-16 mt-16"
      />
    </View>
  );
};
