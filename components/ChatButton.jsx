import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

export const ChatButton = () => {
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: 25,
        right: 130,
        backgroundColor: '#2A45C2',
        borderRadius: 50,
      }}
      onPress={() => navigate.navigate('Chat')}
    >
      <Avatar.Image size={63} source={require('../assets/chat-icon.png')} />
    </TouchableOpacity>
  );
};
