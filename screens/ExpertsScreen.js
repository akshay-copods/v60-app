import React from 'react';
import { Image, View } from 'react-native';
import { Header } from '../components/Header';
import { Avatar, Button, Card, Icon, Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const DATA = [
  {
    name: 'Dr. John Doe',
    role: 'Data Science',
    img: 'https://randomuser.me/api',
    busy: true,
    schedule: {
      date: '20th Oct',
      time: '10:00 AM',
      scheduled: true,
    },
  },
];
const MeetingsCard = () => {
  return (
    <View className="w-96 px-5 py-6 bg-white rounded-2xl">
      <View className="flex flex-row items-center gap-3">
        <View className="">
          {/* <Text variant="titleLarge">Card title</Text> */}
          <Image
            className="rounded-xl"
            style={{ width: 104, height: 104 }}
            source={{ uri: 'https://picsum.photos/700' }}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            gap: 10,
            flex: 1,
          }}
        >
          <View>
            <Text className="font-medium font-inter text-sm text-[#3A4355]">
              Johnathon Smith
            </Text>
          </View>
          <View>
            <Text className="font-normal text-xs text-[#3A4355]">
              Card content
            </Text>
          </View>
          <View className="flex flex-row gap-2">
            <FontAwesome5 name="graduation-cap" size={16} />
            <Text className="text-xs text-[#5F6A80] font-normal ">
              Scheduled Tomorrow, 10:00 AM
            </Text>
          </View>
          <Chip
            mode="outlined"
            className="self-start bg-[#D24A6266] border-[#D24A62]"
            icon={({ color, size }) => (
              <FontAwesome5 color="red" name="graduation-cap" size={16} />
            )}
            onPress={() => console.log('Pressed')}
            style={{
              borderColor: '#D24A62',
              borderWidth: 1,
            }}
          >
            <Text className="text-[#D24A62] font-medium font-roboto">Busy</Text>
          </Chip>
        </View>
      </View>
    </View>
  );
};
export const ExpertsScreen = () => {
  return (
    <View className="h-full overflow-scroll">
      <Header title={'Talk to Experts'} />
      <View className="pt-6 px-6 gap-3">
        <Text className="font-semibold text-lg text-[#3A4355]">
          Scheduled Meetings
        </Text>
        <ScrollView className="flex" horizontal={true}>
          <MeetingsCard />
        </ScrollView>
      </View>
    </View>
  );
};
