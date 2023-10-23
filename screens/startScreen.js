import React from 'react';
import { View, Text, Button, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme';

const { height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToWeatherPage = () => {
    navigation.navigate('Home');
  };

  const goToGymPage = () => {
    navigation.navigate('Gym');
  };

  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <Image blurRadius={70} source={require('../assets/images/bg.png')} className="absolute h-full w-full" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Home Page</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="Check Climate" onPress={goToWeatherPage} color="#ffffff"/>
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Check Fitness" onPress={goToGymPage} color="#ffffff"/>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Align children vertically
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center', // Align children vertically
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonWrapper: {
    width: '40%', // Adjust the width of the buttons according to your preference
  },
});

export default HomeScreen;
