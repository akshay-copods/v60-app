import * as React from 'react';

import { View, Text, FlatList } from 'react-native';
import { ModuleCard } from '../components/Card';
import { Header } from '../components/Header';
import { useAppStore } from '../store';
import { ChatButton } from '../components/ChatButton';

export function DetailsScreen() {
  const modules = useAppStore((state) => state.moduleData);

  return (
    <View className="items-center h-full overflow-scroll">
      <Header title={'Training'} />
      <View className="justify-center flex-1 w-full px-5 mt-8">
        <Text className="text-[32px] font-medium self-start text-[#3A4355] mb-8">
          Lets start with your First Training module..
        </Text>
        <FlatList
          data={modules}
          renderItem={({ item }) => (
            <View className="relative">
              <ModuleCard
                key={item.id}
                id={item.id}
                title={item.moduleName}
                shortDescription={item.shortModuleDescription}
                estimatedTime={item.estimatedTime}
                totalTopics={item.totalTopics}
                status={item.status}
                cardType={'TRAINING'}
                iconName={'precision-manufacturing'}
              />
              <View className="absolute top-[35px] right-[180px]">
                <ModuleCard
                  key={item.id}
                  id={item.id}
                  title={'General Function of depositor'}
                  estimatedTime={5}
                  status={item.status}
                  cardType={'ASSESSMENT'}
                  iconName={'quiz'}
                />
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <ChatButton />
    </View>
  );
}
