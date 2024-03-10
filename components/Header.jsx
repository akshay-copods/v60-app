import { Image, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';

export const Header = ({ title }) => {
  return (
    <View className="flex-row justify-between items-center w-full p-4 bg-white">
      <Text className="text-[#3A4355] text-3xl font-semibold ">{title}</Text>
      <View className="flex-row">
        <View className="h-8 w-8 rounded-full border border-[#737E93] items-center justify-center">
          <MaterialIcons name="phone-in-talk" size={20} color="#737E93" />
        </View>
        <View className="h-8 w-8 rounded-full border border-[#737E93] items-center justify-center ml-3">
          <Ionicons name="notifications" size={20} color="#737E93" />
        </View>
        <View className="h-8 w-8 rounded-full border border-[#737E93] items-center justify-center ml-3">
          <Avatar.Text
            size={20}
            label="User"
            className="w-full h-full rounded-full bg-white"
          />
        </View>
      </View>
    </View>
  );
};
