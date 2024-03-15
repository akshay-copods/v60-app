import { Text, View } from 'react-native';
import { Header } from '../components/Header';

export const AssessmentScreen = () => {
  return (
    <View className="items-center h-full overflow-scroll">
      <Header trainingTitle={'Training'} />
      <View className="pt-8 pb-[60px] pl-[92px] pr-[140px] border w-full h-full">
        <Text>TRAINING</Text>
      </View>
    </View>
  );
};
