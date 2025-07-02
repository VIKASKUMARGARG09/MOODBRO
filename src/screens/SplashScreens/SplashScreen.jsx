// src/screens/SplashScreen.jsx
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity 0
const scaleAnim = useRef(new Animated.Value(0.8)).current;
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
                  transform: [
                    { 
                      scale: scaleAnim.interpolate({
                        inputRange: [0.8, 1],
                        outputRange: [0.9, 1],
                      })
                    },
                    {
                      translateY: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [30, 0],
                      })
                    }
                  ]
                }
              ]}
            >
              "Decode your feels. Upgrade your flow."
            </Animated.Text>
            
      {/* <Text style={styles.text}>🌞 SplashScreen is alive!</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFA726',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
		height: "100%",
    // justifyContent: 'center',
    // alignItems: 'center', 
		backgroundColor: "#2E5452",
		// marginRight: 48,
		// borderRadius: 40,
  },
   quote: {
    width: 400,
    fontFamily: 'plusJakartaSans',
    fontSize: 24,
    // fontWeight: '600',
    fontStyle: 'italic',
    lineHeight: 32,
    letterSpacing: -2,
    textAlign: 'center',
    color: '#B4C48D',
    // zIndex: 10,
    // fontStyle: 'italic',
    // textShadowColor: 'rgba(0, 0, 0, 0.5)',
    // textShadowOffset: { width: 1, height: 2 },
    // textShadowRadius: 6,
  },
  logo:{
    width: 200,
		height: 200,
		// marginTop: 312,
		// marginBottom: 312,
    justifyContent: 'center',
    alignItems: 'center',
		// marginHorizontal: 150,
  }
});

export default SplashScreen;