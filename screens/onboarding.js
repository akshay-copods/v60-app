import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';

export const Onboarding = () => {
  const navigation = useNavigation();
  const [activeStep, setActiveStep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const textFadeAnim1 = useRef(new Animated.Value(0)).current; // For "I’m ProdAi, your AI companion."
  const textFadeAnim2 = useRef(new Animated.Value(0)).current; // For "My mission? To make you a V60-Depositor pro!"
  const textFadeAnim3 = useRef(new Animated.Value(0)).current; // For the mission description text
  const buttonFadeAnim = useRef(new Animated.Value(0)).current; // For the Get Started button

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0, // Fade out
        duration: 500, // Animation can last 500 ms
        useNativeDriver: true, // Add this line
      }).start(() => {
        setActiveStep(1);
        animateTexts();
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const animateTexts = () => {
    Animated.sequence([
      Animated.timing(textFadeAnim1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(textFadeAnim2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(textFadeAnim3, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(buttonFadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View className="h-full w-full items-center justify-center">
      {activeStep === 0 ? (
        <Animated.View
          style={{
            opacity: fadeAnim, // Bind opacity to animated value
          }}
        >
          <View className="items-center">
            <Avatar.Image
              size={280}
              source={require('../assets/onboarding.png')}
            />
            <Text className="mt-12 text-5xl font-semibold">
              Welcome OTIS..!!
            </Text>
          </View>
        </Animated.View>
      ) : (
        <View className="h-full w-full items-start flex-row mt-60 ml-10">
          <Avatar.Image
            size={64}
            source={require('../assets/onboarding.png')}
          />
          <View className="ml-8">
            <Animated.Text
              style={{
                opacity: textFadeAnim1, // Bind opacity to animated value
              }}
              className="text-5xl text-[#3A4355] font-semibold"
            >
              Welcome OTIS..!!
            </Animated.Text>
            <Animated.Text
              style={{
                opacity: textFadeAnim2, // Bind opacity to animated value
              }}
              className="mt-10 text-[#3A4355] text-3xl font-normal"
            >
              I’m ProdAi, your AI companion.
            </Animated.Text>
            <Animated.Text
              style={{
                opacity: textFadeAnim2, // Bind opacity to animated value
              }}
              className="text-3xl text-[#3A4355] font-normal"
            >
              My mission? To make you a V60-Depositor pro!
            </Animated.Text>
            <Animated.Text
              style={{
                opacity: textFadeAnim3, // Bind opacity to animated value
              }}
              className="text-2xl text-[#3A4355] font-normal max-w-[700px] mt-16"
            >
              You’ll Learn, Train, and Assess your knowledge about this
              marvelous machine.
            </Animated.Text>
            <Animated.View style={{ opacity: buttonFadeAnim }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('login')}
                className="bg-[#9E53DA] px-8 py-3 rounded-lg mt-16 w-52"
              >
                <Text className="text-white text-center font-bold">
                  Get Started
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      )}
    </View>
  );
};
