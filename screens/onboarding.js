import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export const Onboarding = () => {
  const navigation = useNavigation();
  const [activeStep, setActiveStep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const textFadeAnim1 = useRef(new Animated.Value(0)).current;
  const textFadeAnim2 = useRef(new Animated.Value(0)).current;
  const textFadeAnim3 = useRef(new Animated.Value(0)).current;
  const buttonFadeAnim1 = useRef(new Animated.Value(0)).current;
  const textFadeAnim4 = useRef(new Animated.Value(0)).current;
  const textFadeAnim5 = useRef(new Animated.Value(0)).current;
  const textFadeAnim6 = useRef(new Animated.Value(0)).current;
  const buttonFadeAnim2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (activeStep === 0) {
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
    } else if (activeStep === 2) {
      animateTexts2();
    }
  }, [activeStep]);

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
      Animated.timing(buttonFadeAnim1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateTexts2 = () => {
    Animated.sequence([
      Animated.timing(textFadeAnim4, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(textFadeAnim5, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(textFadeAnim6, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(buttonFadeAnim2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View className="h-full w-full items-center justify-center">
      {activeStep === 0 && (
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
      )}
      {activeStep === 1 && (
        <View className="h-full w-full items-start flex-row mt-32 ml-10">
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
            <Animated.View style={{ opacity: buttonFadeAnim1 }}>
              <TouchableOpacity
                onPress={() => setActiveStep(2)}
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
      {activeStep === 2 && (
        <View className="h-full w-full items-start flex-row mt-32 ml-10">
          <Avatar.Image
            size={64}
            source={require('../assets/onboarding.png')}
          />
          <View className="ml-8">
            <Animated.Text
              style={{
                opacity: textFadeAnim4, // Bind opacity to animated value
              }}
              className="text-3xl font-semibold"
            >
              Buckle up, Otis!
            </Animated.Text>
            <Animated.View
              style={{
                opacity: textFadeAnim5, // Bind opacity to animated value
              }}
              className="mt-10"
            >
              <Text className="text-2xl font-normal">
                Our training adventure spans approximately 
              </Text>
              <View className="flex-row items-center mt-3">
                <View className="h-12 w-12 rounded-md bg-[#F0F2F4] items-center justify-center">
                  <MaterialCommunityIcons
                    name="calendar-clock"
                    size={24}
                    color="#737E93"
                  />
                </View>
                <Text className="text-[#3A4355] text-5xl ml-4 font-semibold leading-[56px]">
                  4-5
                </Text>
                <Text className="text-[#8A94A5] text-2xl ml-2">days.</Text>
              </View>
            </Animated.View>
            <Animated.View
              style={{
                opacity: textFadeAnim6, // Bind opacity to animated value
              }}
              className="mt-10"
            >
              <Text className="text-2xl font-normal">
                We’ll dive deep into the V60-Depositor machine, covering
              </Text>
              <View className="flex-row items-center mt-3">
                <View className="h-12 w-12 rounded-md bg-[#F5D7FF] items-center justify-center">
                  <MaterialIcons name="menu-book" size={24} color="#737E93" />
                </View>
                <Text className="text-[#3A4355] text-5xl ml-4 font-semibold leading-[56px]">
                  30
                </Text>
                <Text className="text-[#8A94A5] text-2xl ml-2">
                  Topics & Assessments
                </Text>
              </View>
            </Animated.View>
            <Animated.Text
              style={{ opacity: buttonFadeAnim2 }}
              className="text-2xl mt-12 font-normal"
            >
              From the basics to advanced techniques, you’ll become a depositor
              expert.
            </Animated.Text>
            <Animated.Text
              style={{ opacity: buttonFadeAnim2 }}
              className="text-2xl mt-20 font-normal"
            >
              Your training awaits.
            </Animated.Text>
            <Animated.View style={{ opacity: buttonFadeAnim2 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('training')}
                className="bg-[#9E53DA] px-8 py-3 rounded-lg mt-4 w-52"
              >
                <Text className="text-white text-center font-bold">
                  Proceed to Training
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      )}
    </View>
  );
};
