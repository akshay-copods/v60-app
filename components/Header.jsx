import { Image, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const Header = ({ title, trainingTitle }) => {
  const navigation = useNavigation();

  return !trainingTitle ? (
    <View className="flex-row justify-between items-center w-full p-4 bg-white">
      <Text className="text-[#3A4355] text-3xl font-semibold ">{title}</Text>
      <View className="flex-row">
        <View className="h-8 w-8 rounded-full border border-[#737E93] items-center justify-center">
          <MaterialIcons
            onPress={() => navigation.navigate('Experts')}
            name="phone-in-talk"
            size={20}
            color="#737E93"
          />
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
  ) : (
    <View className="flex-row justify-between items-center w-full p-4 bg-white">
      <View className="flex-row items-center">
        <Ionicons
          name="arrow-back"
          size={24}
          color="#9E53DA"
          onPress={() => navigation.navigate('training')}
        />
        <View className="h-12 w-12 rounded-md bg-[#F5D7FF] items-center justify-center ml-7">
          <MaterialIcons
            name="precision-manufacturing"
            size={24}
            color="#5F6A80"
          />
        </View>
        <View className="ml-3">
          <Text className="text-[#8A94A5] text-sm tracking-[3px]">
            TRAINING
          </Text>
          <Text className="text-[#3A4355] text-lg">{trainingTitle}</Text>
        </View>
      </View>
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
