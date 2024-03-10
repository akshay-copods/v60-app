import { FlatList, Text, View } from 'react-native';
import { useAppStore } from '../store';

export const IndividualModuleScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const module = useAppStore((state) => state.getModuleData);

  console.log(module);

  return (
    <View className="items-start h-full overflow-scroll border relative">
      <View className="absolute h-[50%] w-full bg-red-500 top-[14%] opacity-20"></View>
      <FlatList
        data={module(id)}
        onEndReached={(e) => {
          console.log(e);
        }}
        onStartReached={(e) => {
          console.log(e);
        }}
        onEndReachedThreshold={20}
        renderItem={({ item }) => (
          <View className="mb-16 text-[#000000] max-w-xl">
            <Text className="text-lg font-semibold">
              TOPIC {item.id}: {item.title}
            </Text>
            <Text className="text-2xl font-normal mt-4">
              {item.titleDescription}
            </Text>
            <Text className="text-2xl font-normal leading-10 mt-8">
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
