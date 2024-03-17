import {
  Animated,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Header } from '../components/Header';
import { Avatar, RadioButton } from 'react-native-paper';
import { useEffect, useRef, useState } from 'react';
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useAppStore } from '../store';

export const ProgressBar = ({ totalQuestions, activeQuestion }) => {
  const width = ((activeQuestion + 1) / totalQuestions?.length) * 100;

  return (
    <View className="w-full h-2 flex-row items-center" style={{ gap: 6 }}>
      {width !== 0 && (
        <View
          style={{
            width: `${width}%`,
            borderColor: width > 75 ? '#32AE7F' : '#D0BCFF',
          }}
          className={`border-2 rounded-full bg-red`}
        ></View>
      )}
      {width !== 100 && (
        <View className="border-2 rounded-full bg-red flex-1 border-[#A1A9B8]"></View>
      )}
    </View>
  );
};

export const QuestionAnswers = ({ question, userAnswer, setUserAnswer }) => {
  const handlePress = (newValue) => {
    setUserAnswer(newValue);
  };

  return (
    <View className="w-full h-full flex-1" style={{ gap: 48 }}>
      <View style={{ gap: 8 }}>
        <Text className="text-sm font-normal">
          {question?.difficulty ?? 'NO DIFFICULTY COMING FROM DB'}
        </Text>
        <Text className="text-xl font-bold">
          {question?.question ?? 'NO QUESTION COMING FROM DB'}
        </Text>
      </View>
      <RadioButton.Group
        onValueChange={(newValue) => setUserAnswer(newValue)}
        value={userAnswer}
      >
        <View className="w-full ml-[-8px]" style={{ gap: 24 }}>
          {question?.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(option.id)}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
            >
              <RadioButton color="#9E53DA" value={option.id} />
              <Text className="text-xl font-normal">{option.option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </RadioButton.Group>
    </View>
  );
};

export const BottomDrawer = ({ isOpen, handleNextQuestion, question }) => {
  const translateY = useRef(new Animated.Value(228)).current; // Start off-screen (drawer height)
  const userName = useAppStore((state) => state.signedInUser);

  useEffect(() => {
    // Start the animation when isOpen changes
    Animated.timing(translateY, {
      toValue: isOpen ? 0 : 228, // Move up to show, down to hide
      duration: 300, // Animation duration
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [isOpen]);

  // Animated style that will be applied to the drawer
  const animatedStyle = {
    transform: [{ translateY }], // Animate translateY
    backgroundColor: '#F7F2FA',
    position: 'absolute',
    bottom: 0, // Positioned at the bottom
    left: 0,
    right: 0,
    height: 228, // Drawer height
    justifyContent: 'start', // Center content vertically
    alignItems: 'center', // Center content horizontally
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
  };

  return (
    <Animated.View style={animatedStyle}>
      <View className="w-full">
        <View className="w-full py-4">
          <View className="self-center h-1 w-8 rounded-full bg-[#79747E]"></View>
        </View>

        <View className="pl-[91px] flex-row" style={{ gap: 13 }}>
          {question?.isCorrect ? (
            <>
              <MaterialIcons name="check-circle" size={40} color="#32AE7F" />
              <View className="w-full">
                <Text className="text-[#32AE7F] text-xl font-bold mt-1">
                  Excellent{' '}
                  {userName.charAt(0).toUpperCase() +
                    userName.slice(1).toLowerCase()}
                  ..!!
                </Text>
                <Text className="text-black text-lg font-normal mt-4">
                  {question?.info ?? 'NO INFO COMING FROM DB'}
                </Text>
                <TouchableOpacity onPress={handleNextQuestion}>
                  <Text className="bg-[#9E53DA] text-white text-sm font-semibold mt-10 py-3 w-[262px] rounded-md text-center">
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <MaterialIcons name="cancel" size={40} color="#E3467E" />
              <View className="w-full">
                <Text className="text-[#E3467E] text-xl font-bold mt-1">
                  Ohh..!! Try again later.
                </Text>
                <Text className="text-black text-lg font-normal mt-4">
                  You can always correct your answers at the end of the
                  assessment.
                </Text>
                <TouchableOpacity onPress={handleNextQuestion}>
                  <Text className="bg-[#9E53DA] text-white text-sm font-semibold mt-10 py-3 w-[262px] rounded-md text-center">
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </Animated.View>
  );
};

export const AssessmentScreen = ({ route }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [assessmentData, setAssessmentData] = useState({});
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);

  const { id, trainingTitle } = route.params;

  const getModuleAssessment = useAppStore((state) => state.getModuleAssessment);
  const updateModuleAssessment = useAppStore(
    (state) => state.updateModuleAssessment
  );

  useEffect(() => {
    setAssessmentData(getModuleAssessment(id));
  }, [getModuleAssessment]);

  const handleAnswerSubmit = () => {
    setIsOpen(true);
    setAssessmentData((prevState) => ({
      ...prevState,
      questions: prevState.questions.map((question, index) =>
        index === activeQuestion
          ? {
              ...question,
              userAnswer,
              isCorrect: userAnswer === question.answer,
            }
          : question
      ),
    }));
  };

  const handleNextQuestion = () => {
    setIsOpen(false);
    setTimeout(() => {
      setActiveQuestion((prevState) => prevState + 1);
      setUserAnswer(null);
    }, 500);
  };

  useEffect(() => {
    setUserAnswer(
      assessmentData?.questions?.[activeQuestion]?.userAnswer ?? null
    );
    updateModuleAssessment(id, assessmentData);
  }, [assessmentData, activeQuestion]);

  const handleRestartQuiz = () => {
    setActiveQuestion(0);
    setAssessmentData({
      ...assessmentData,
      questions: assessmentData?.questions?.filter(
        (question) => !question.isCorrect
      ),
    });
  };

  return (
    <View className="items-center h-full overflow-scroll">
      <Header trainingTitle={trainingTitle} />
      {assessmentData?.questions?.[activeQuestion] ? (
        <>
          <View className="pt-8 pb-[60px] px-[92px] w-full h-full">
            <ProgressBar
              totalQuestions={assessmentData?.questions}
              activeQuestion={activeQuestion}
            />
            <View className="w-full mt-3">
              <Text className="text-[#737E93] text-sm font-normal">
                {activeQuestion + 1} of {assessmentData?.questions?.length}{' '}
                Questions
              </Text>
            </View>
            <View className="flex-1 flex-row mt-12" style={{ gap: 28 }}>
              <Avatar.Image
                size={64}
                source={require('../assets/assessment-icon.png')}
                className="bg-[#F5F5F5]"
              />
              <QuestionAnswers
                question={assessmentData?.questions?.[activeQuestion]}
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
              />
            </View>
            <TouchableOpacity disabled={userAnswer === null ? false : true}>
              <Text
                onPress={() => handleAnswerSubmit()}
                className={`${
                  userAnswer === null
                    ? 'bg-[#F0F2F4] text-[#A1A9B8]'
                    : 'bg-[#9E53DA] text-white'
                }  text-sm font-semibold mb-[60px] text-center self-start py-3 w-[262px] rounded-md`}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <BottomDrawer
            isOpen={isOpen}
            handleNextQuestion={handleNextQuestion}
            question={assessmentData?.questions?.[activeQuestion]}
          />
        </>
      ) : assessmentData?.questions?.some((question) => !question.isCorrect) ? (
        <View className="h-full w-full items-center">
          <View className="mt-[131px] relative">
            <Avatar.Image
              size={309}
              source={require('../assets/assessment-reset.png')}
            />
            <View className="px-6 py-3 bg-white border-[#E5E5E5] border-2 rounded-2xl w-[365px] absolute bottom-[-10px] left-[-27px]">
              <Text className="text-[#3C3C3C] text-[17px] font-medium text-center">
                Let's review the exercises you missed! Try to correct them.
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleRestartQuiz}
            className="bg-[#9E53DA] w-[262px] rounded-md mt-[106px]"
          >
            <Text className="text-sm font-semibold text-center text-white py-2">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView className="w-full">
          <View className="w-full items-center">
            <View className="mt-[51px] relative">
              <View className="flex-row items-center">
                <Image
                  // source={require('../assets/confetti.gif')}
                  source={require('../assets/end-assessment-icon.png')}
                  style={{ width: 206, height: 206 }}
                />
                <Avatar.Image
                  size={309}
                  source={require('../assets/end-assessment-icon.png')}
                />
                <Image
                  // source={require('../assets/confetti.gif')}
                  source={require('../assets/end-assessment-icon.png')}
                  style={{
                    width: 206,
                    height: 206,
                    transform: [{ rotate: '270deg' }],
                  }}
                />
              </View>
              <View className="px-6 py-3 bg-white border-[#E5E5E5] border-2 rounded-2xl w-[673px] mt-[-48px] ml-[20px]">
                <Text className="text-[#3C3C3C] text-[32px] font-medium text-center">
                  Congratulations, Otis!
                </Text>
                <Text className="text-[#3C3C3C] text-[20px] font-normal text-center mt-2">
                  You’ve conquered the assessment like a seasoned depositor pro.
                </Text>
              </View>
              <View
                className="flex-row items-center ml-[21px] mt-4"
                style={{ gap: 17 }}
              >
                {[
                  {
                    title: 'Time Taken:',
                    titleText: '5:30 min',
                    icon: (
                      <Ionicons
                        name="alarm"
                        size={24}
                        color="#737E93"
                        style={{ marginLeft: 20 }}
                      />
                    ),
                  },
                  {
                    title: 'Assessment Score',
                    titleText: '90%',
                    icon: (
                      <MaterialCommunityIcons
                        name="file-percent-outline"
                        size={24}
                        color="#737E93"
                        style={{ marginLeft: 20 }}
                      />
                    ),
                  },
                  {
                    title: 'Assessment Goal',
                    titleText: '1/30',
                    icon: (
                      <MaterialIcons
                        name="flag"
                        size={24}
                        color="#737E93"
                        style={{ marginLeft: 20 }}
                      />
                    ),
                  },
                ].map((star, index) => (
                  <View
                    key={index}
                    className="border-2 border-[#E5E5E5] bg-white rounded-2xl flex-row items-center w-[212px] py-3"
                    style={{ gap: 20 }}
                  >
                    {star.icon}
                    <View className="items-start">
                      <Text className="text-[#737E93] mb-1">{star.title}</Text>
                      <Text>{star.titleText}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => alert('Assessment Completed')}
              className="bg-[#9E53DA] w-[262px] rounded-md mt-12"
            >
              <Text className="text-sm font-semibold text-center text-white py-2">
                Complete Assessment
              </Text>
            </TouchableOpacity>
            <View className="items-center mt-11">
              <Text className="text-[#3A4355] text-sm font-semibold">
                Do you Have Doubts?
              </Text>
              <View
                className="flex-row items-center mt-4 mb-11"
                style={{ gap: 22 }}
              >
                <TouchableOpacity
                  onPress={() => alert('Assessment Completed')}
                  className="bg-[#F0F2F4] w-[262px] rounded-md"
                >
                  <Text className="text-sm font-semibold text-center text-[#9E53DA] py-2">
                    Talk to Experts
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => alert('Assessment Completed')}
                  className="bg-[#F0F2F4] w-[262px] rounded-md"
                >
                  <Text className="text-sm font-semibold text-center text-[#9E53DA] py-2">
                    Ask Question to ProdAi
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
