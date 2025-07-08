// src/screens/SplashScreen.jsx
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity 0

  useEffect(() => {
    console.log('SplashScreen mounted');
    
    // Start fade in animation
    Animated.sequence([
      // Fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500, // 1.5 seconds fade in
        useNativeDriver: true,
      }),
      // Hold for a moment
      Animated.delay(1000), // Hold for 1 second
      // Fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1500, // 1.5 seconds fade out
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate after total animation time
    const timer = setTimeout(() => navigation.navigate('FetchingData'), 4500); // 1.5s + 1s + 1.5s + 0.5s buffer
    return () => clearTimeout(timer);
  }, [navigation, fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../../assets/images/logo.png')}
        style={[styles.logo, { opacity: fadeAnim }]}
        resizeMode="contain"
      />
      <Animated.Text 
        style={[
          styles.quote,
          {
            opacity: fadeAnim,
          }
        ]}
      >
        "Decode your feels. Upgrade your flow."
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    backgroundColor: "#2E5452",
  },
  quote: {
    width: 400,
    fontFamily: 'plusJakartaSans, System',
    fontSize: 24,
    fontStyle: 'italic',
    lineHeight: 32,
    letterSpacing: -2,
    textAlign: 'center',
    color: '#B4C48D',
  },
  logo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SplashScreen;