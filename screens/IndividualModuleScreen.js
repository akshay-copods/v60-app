import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppStore } from '../store';
import { Header } from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { Avatar } from 'react-native-paper';
import { Video, ResizeMode } from 'expo-av';

export const IndividualModuleScreen = ({ route }) => {
  const { id, trainingTitle } = route.params;
  const [activeModule, setActiveModule] = useState(0);
  const navigation = useNavigation();

  const module = useAppStore((state) => state.getModuleData);
  const completeModule = useAppStore((state) => state.completeModule);

  const moduleData = module(id);

  const completeTrainingModule = () => {
    completeModule(id);
    navigation.navigate('Training');
  };
  const video = useRef(null);

  return (
    <View className="items-start flex-1 relative">
      <Header trainingTitle={trainingTitle} />
      <View className="flex-row px-10 flex-1">
        <View className="pt-16 pr-8">
          <Avatar.Image
            size={64}
            source={require('../assets/onboarding.png')}
          />
        </View>
        <ScrollView className="w-full">
          <View className="pt-8">
            <Text className="text-2xl font-extrabold text-purple-800 mb-4">
              TOPIC {moduleData[activeModule].id}:{' '}
              {moduleData[activeModule]?.title ?? 'No Title'}
            </Text>
            <Text className="text-lg font-semibold text-gray-600 mb-8">
              {moduleData[activeModule]?.titleDescription ?? 'No Description'}
            </Text>
            <Text className="text-xl font-normal text-gray-800 leading-relaxed">
              {moduleData[activeModule].content}
            </Text>
            {moduleData[activeModule].image && (
              <View className="mt-8">
                <Text className="text-xl font-normal text-gray-800 leading-relaxed">
                  Image for Reference
                </Text>
                <Image
                  style={styles.image}
                  source={{
                    uri: moduleData[activeModule].image,
                  }}
                  className="mt-2"
                />
              </View>
            )}
            {moduleData[activeModule].video && (
              <View className="mt-8">
                <Text className="text-xl font-normal text-gray-800 leading-relaxed">
                  Video for Reference
                </Text>
                <Video
                  ref={video}
                  style={styles.video}
                  source={{
                    uri: moduleData[activeModule].video,
                  }}
                  useNativeControls
                  resizeMode={ResizeMode.COVER}
                  isLooping
                  className="mt-2"
                />
              </View>
            )}

            <View className="mb-4">
              {activeModule === 0 &&
                activeModule !== moduleData?.length - 1 && (
                  <TouchableOpacity
                    onPress={() => setActiveModule(activeModule + 1)}
                    className="bg-[#9E53DA] px-12 py-3 rounded-lg mt-12 self-start"
                  >
                    <Text className="text-[#F0F2F4] text-center font-bold">
                      Next Topic ({Number(moduleData[activeModule].id) + 1}/
                      {moduleData.length}
                      ): {moduleData[activeModule + 1]?.title ?? 'No Title'}
                    </Text>
                  </TouchableOpacity>
                )}
              {activeModule === moduleData?.length - 1 && (
                <View className="mt-10">
                  <TouchableOpacity
                    onPress={completeTrainingModule}
                    className="bg-[#9E53DA] px-4 py-2 rounded-lg self-start"
                  >
                    <Text className="text-[#F0F2F4] text-center text-sm font-semibold">
                      Complete Training
                    </Text>
                  </TouchableOpacity>
                  {moduleData[activeModule - 1]?.title.length && (
                    <TouchableOpacity
                      onPress={() => setActiveModule(activeModule - 1)}
                      className="bg-[#F0F2F4] px-4 py-2 rounded-lg self-start mt-4"
                    >
                      <Text className="text-[#9E53DA] text-center text-sm font-semibold">
                        Previous Topic (
                        {Number(moduleData[activeModule].id) - 1}/
                        {moduleData.length}
                        ): {moduleData[activeModule - 1]?.title ?? 'No Title'}
                      </Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Experts');
                    }}
                    className="bg-[#F0F2F4] px-4 py-2 rounded-lg self-start mt-4"
                  >
                    <Text className="text-[#9E53DA] text-center text-sm font-semibold">
                      I have Doubts: Talk to Experts
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Chat')}
                    className="bg-[#F0F2F4] px-4 py-2 rounded-lg self-start mt-4"
                  >
                    <Text className="text-[#9E53DA] text-center text-sm font-semibold">
                      Ask Question To ProdAi
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              {activeModule > 0 && activeModule < moduleData.length - 1 && (
                <View className="mt-10">
                  <TouchableOpacity
                    onPress={() => setActiveModule(activeModule + 1)}
                    className="bg-[#9E53DA] px-4 py-2 rounded-lg self-start"
                  >
                    <Text className="text-[#F0F2F4] text-center text-sm font-semibold">
                      Next Topic ({Number(moduleData[activeModule].id) + 1}/
                      {moduleData.length}
                      ): {moduleData[activeModule + 1]?.title ?? 'No Title'}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setActiveModule(activeModule - 1)}
                    className="bg-[#9E53DA] px-4 py-2 rounded-lg self-start mt-4"
                  >
                    <Text className="text-[#F0F2F4] text-center text-sm font-semibold">
                      Previous Topic ({Number(moduleData[activeModule].id) - 1}/
                      {moduleData.length}
                      ): {moduleData[activeModule - 1]?.title ?? 'No Title'}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: 500,
    objectFit: 'contain',
  },
  video: {
    alignSelf: 'center',
    width: 600,
    height: 400,
  },
});
