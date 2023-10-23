import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, SafeAreaView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme';

const FitnessScreen = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
  };

  const getMealPlan = () => {
    if (bmi < 18.5) {
      return 'Eat balanced meals with a focus on protein and healthy fats. Try to include complex carbs for energy.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Maintain your balanced diet. Include a variety of fruits, vegetables, lean proteins, and whole grains.';
    } else {
      return 'Focus on portion control. Eat smaller, balanced meals with reduced intake of sugars and processed foods.';
    }
  };

  const showResult = () => {
    if (!bmi) {
      Alert.alert('Invalid Input', 'Please calculate BMI first.');
      return;
    }

    Alert.alert(
      'BMI Result',
      `Your BMI: ${bmi}\nMeal Plan: ${getMealPlan()}`,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  return (
    <View className="flex-1 items-center justify-center relative">
      <StatusBar style='light'/>
      <Image blurRadius={70} source={require('../assets/images/bg.png')} className="absolute h-full w-full" />
      <SafeAreaView className="flex-1 w-full items-center justify-center">
        <Text className="text-white text-2xl mb-4">BMI Calculator</Text>
        <View className="flex flex-row mb-4 w-full justify-center items-center">
          <View className="flex items-center justify-center rounded-full bg-opacity-50 bg-white p-2"
          style={{backgroundColor: theme.bgWhite(0.2)}}>
            <TextInput
              placeholder="Enter Weight (kg)"
              keyboardType="numeric"
              value={weight}
              onChangeText={(text) => setWeight(text)}
              className="pl-2 h-10 text-base text-black"
            />
          </View>
          <View className="flex items-center justify-center rounded-full bg-opacity-50 bg-white p-2 ml-4"
          style={{backgroundColor: theme.bgWhite(0.2)}}>
            <TextInput
              placeholder="Enter Height (cm)"
              keyboardType="numeric"
              value={height}
              onChangeText={(text) => setHeight(text)}
              className="pl-2 h-10 text-base text-black"
            />
          </View>
        </View>
        <Button title="Calculate BMI" onPress={calculateBMI} />
        <Button title="Get you Meal Plan" onPress={showResult} />
      </SafeAreaView>
    </View>
  );
};

export default FitnessScreen;
