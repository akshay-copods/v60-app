import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const ModuleCard = ({
  title,
  shortDescription,
  id,
  estimatedTime,
  totalTopics,
  status,
}) => {
  const navigation = useNavigation();

  return (
    <Card className="mb-6 w-[499px] bg-white shadow-lg border border-[#dedede]">
      <Card.Content>
        <View className="flex-row justify-between w-full items-start">
          <View>
            <View className="h-12 w-12 rounded-md bg-[#F0F2F4] items-center justify-center">
              <MaterialIcons
                name="precision-manufacturing"
                size={24}
                color="#5F6A80"
              />
            </View>
            <Text className="text-[#8A94A5] font-medium text-xs mt-2">
              TRAINING {id}
            </Text>
          </View>
          {status === 'PENDING' && (
            <View className="py-[6px] px-4 bg-[#FFF2E4] border border-[#E1AF74] rounded-md">
              <Text className="text-sm text-[#3A4355]">Pending</Text>
            </View>
          )}
          {status === 'LOCKED' && (
            <View className="py-[6px] px-4 bg-[#E2E5E9] border border-[#A1A9B8] rounded-md">
              <Text className="text-sm text-[#3A4355]">Locked</Text>
            </View>
          )}
          {status === 'COMPLETED' && (
            <View className="py-[6px] px-4 bg-[#EBF7F2] border border-[#32AE7F] rounded-md">
              <Text className="text-sm text-[#008A56]">Completed</Text>
            </View>
          )}
        </View>
        <View className="mt-6">
          <Text className="text-[#3A4355] text-lg font-medium">{title}</Text>
          <Text className="text-[#3A4355] text-sm font-normal mt-2">
            {shortDescription}
          </Text>
        </View>
        <View className="flex-row mt-6">
          <View className="flex-row">
            <MaterialCommunityIcons
              name="calendar-clock-outline"
              size={20}
              color="#5F6A80"
            />
            <Text className="text-sm font-normal text-[#5F6A80] ml-2">
              ~{estimatedTime} Mins
            </Text>
          </View>
          <View className="flex-row ml-4">
            <MaterialIcons name="menu-book" size={20} color="#5F6A80" />
            <Text className="text-sm font-normal text-[#5F6A80] ml-2">
              {totalTopics} Topics
            </Text>
          </View>
        </View>
        {(status === 'PENDING' || status === 'COMPLETED') && (
          <View className="justify-start items-start mt-6">
            <Button
              buttonColor="#9E53DA"
              className="rounded-md"
              mode="contained"
              onPress={() =>
                navigation.navigate('individual_module', {
                  id,
                  trainingTitle: title,
                })
              }
            >
              {status === 'PENDING' && 'Start'}
              {status === 'COMPLETED' && 'Restart'}
            </Button>
          </View>
        )}
      </Card.Content>
    </Card>
  );
};
