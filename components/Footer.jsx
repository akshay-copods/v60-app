import { Text, View } from 'react-native';

export const Footer = () => {
  return (
    <View className="flex-row justify-between items-center w-1/2 px-10 py-[10px] border rounded-2xl bg-white fixed bottom-10">
      <Text className="text-[#3A4355] text-3xl font-semibold ">Footer</Text>
    </View>
  );
};
