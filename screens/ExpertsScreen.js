import React from 'react';
import { Image, View } from 'react-native';
import { Header } from '../components/Header';
import { Avatar, Button, Card, Icon, Text } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper';
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import {
  MEETINGS_DATA,
  RECENT_MEETINGS,
  REQUEST_EXPERTS,
} from './ExpertsScreenMockData';

const CardBusyChip = () => {
  return (
    <View
      style={{
        borderColor: '#D24A62',
        borderWidth: 1,
        backgroundColor: '#D24A6266',
        borderRadius: 8,
        paddingVertical: 2,
        paddingHorizontal: 8,
        height: 24,
        flexDirection: 'row',
        alignSelf: 'flex-start',
      }}
    >
      <MaterialIcons name="do-disturb-on" size={16} color="#D24A62" />
      <Text
        style={{
          fontSize: 12,
          color: '#D24A62',
          height: 24,
        }}
      >
        {' '}
        Busy
      </Text>
    </View>
  );
};
const CardAvailableChip = () => {
  return (
    <View
      style={{
        position: 'relative',
        borderColor: '#008A56',
        borderWidth: 1,
        backgroundColor: '#C5FFE9',
        borderRadius: 8,
        paddingVertical: 2,
        paddingHorizontal: 8,
        height: 24,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
      }}
    >
      <MaterialIcons name="fiber-manual-record" size={16} color="#32AE7F" />
      <Text
        style={{
          fontSize: 12,
          color: '#008A56',
          lineHeight: 20,
        }}
      >
        {' '}
        Available
      </Text>
    </View>
  );
};
const MeetingsCard = ({ busy, name, role, time, image }) => {
  return (
    <View className="w-96 px-5 py-6 bg-white rounded-2xl">
      <View className="flex flex-row items-center gap-3">
        <View className="">
          {/* <Text variant="titleLarge">Card title</Text> */}
          <Image
            className="rounded-xl"
            style={{ width: 104, height: 104 }}
            source={{ uri: image }}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            gap: 8,
            flex: 1,
          }}
        >
          <View>
            <Text
              style={{
                lineHeight: 24,
              }}
              className="font-medium text-sm "
            >
              {name ? name : 'Johnathon Smith'}
            </Text>

            <Text
              style={{
                lineHeight: 20,
              }}
              className="font-normal text-xs text-[#3A4355]"
            >
              {role ? role : 'Supervisor Production Line'}
            </Text>
          </View>
          <View className="flex flex-row gap-2">
            <MaterialCommunityIcons
              name="calendar-clock"
              size={16}
              color="#5F6A80"
            />
            <Text className="text-xs text-[#5F6A80] font-normal ">
              {time ? time : 'Scheduled Tomorrow, 10:00 AM'}
            </Text>
          </View>
          {busy ? <CardBusyChip /> : <CardAvailableChip />}
        </View>
      </View>
    </View>
  );
};
const RequestExpertCard = ({ image, name, role }) => {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
        borderRadius: 8,
      }}
    >
      <View
        style={{
          position: 'relative',
          borderRadius: 8,
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 7,
            zIndex: 1,
          }}
        >
          <CardAvailableChip />
        </View>
        <Image
          style={{
            width: 219,
            height: 109,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          source={{
            uri: image,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          gap: 8,
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#101010',
            }}
          >
            {name ? name : 'Johnathon Smith'}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#3A4355',
            }}
          >
            {role ? role : 'Supervisor Production Line'}
          </Text>
        </View>
        <Button
          style={{
            backgroundColor: '#F0F2F4',
            borderRadius: 8,
            height: 40,
            width: 133,
          }}
        >
          <Text
            style={{
              color: '#9E53DA',
              fontWeight: '600',
              alignSelf: 'flex-start',
            }}
          >
            Request
          </Text>
        </Button>
      </View>
    </View>
  );
};
export const ExpertsScreen = () => {
  return (
    <ScrollView style={{}} className="h-full">
      <Header title={'Talk to Experts'} />
      {/* Meeting cards */}
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 24,
        }}
      >
        <View
          style={{
            gap: 12,
          }}
        >
          <Text
            style={{
              fontWeight: '600',
              color: '#3A4355',
              fontSize: 18,
            }}
          >
            Scheduled Meetings
          </Text>
          <ScrollView className="flex" horizontal={true}>
            {MEETINGS_DATA.map((person) => (
              <MeetingsCard
                key={person.id}
                busy={person.busy}
                name={person.name}
                role={person.role}
                time={person.time}
                image={person.img}
              />
            ))}
          </ScrollView>
        </View>
        {/* Blue Banner */}
        <View
          style={{
            alignSelf: 'flex-start',
            borderRadius: 8,
            backgroundColor: '#7FCDE533',
            flexDirection: 'row',
            gap: 33,
            alignItems: 'center',
            paddingHorizontal: 22,
            paddingVertical: 18,
            marginTop: 24,
          }}
        >
          <View
            style={{
              gap: 8,
              flexDirection: 'column',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
              }}
            >
              Have Doubts?{' '}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
              }}
            >
              Try Raising You hand and someone with answer.{' '}
            </Text>
          </View>
          <Button
            mode="contained"
            style={{
              backgroundColor: '#9E53DA',
              borderRadius: 8,
              height: 40,
            }}
          >
            Raise Hand
          </Button>
        </View>
        {/* Request experts card */}
        <View
          style={{
            gap: 12,
            marginTop: 44,
            flexDirection: 'row',
          }}
        >
          {REQUEST_EXPERTS.map((person) => (
            <RequestExpertCard
              key={person.id}
              image={person.img}
              name={person.name}
              role={person.role}
            />
          ))}
        </View>
        {/* Recent meeting cards */}
        <View
          style={{
            marginTop: 32,
            gap: 12,
          }}
        >
          <Text
            style={{
              fontWeight: '600',
              color: '#3A4355',
              fontSize: 18,
            }}
          >
            Recent Meetings{' '}
          </Text>
          <View style={{ gap: 16, flexDirection: 'row' }} horizontal={true}>
            {RECENT_MEETINGS.map((person) => (
              <MeetingsCard
                key={person.id}
                busy={person.busy}
                image={person.img}
                name={person.name}
                role={person.role}
                time={person.time}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
