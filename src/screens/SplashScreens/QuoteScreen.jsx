import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

const QuoteScreen = () => {
  // Animation refs
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const circleAnims = useRef([
    new Animated.Value(0), // Circle 1
    new Animated.Value(0), // Circle 2
    new Animated.Value(0), // Circle 3
    new Animated.Value(0), // Circle 4
    new Animated.Value(0), // Circle 5
    new Animated.Value(0), // Circle 6
    new Animated.Value(0), // Circle 7
    new Animated.Value(0), // Circle 8
    new Animated.Value(0), // Circle 9
  ]).current;

  // Circle configurations - moved outside return
  const circles = [
    // Large circles
    { width: 200, height: 200, top: -100, left: -80, opacity: 0.3 },
    { width: 180, height: 180, top: -60, right: -70, opacity: 0.4 },
    { width: 220, height: 220, bottom: -110, left: -90, opacity: 0.2 },
    { width: 160, height: 160, bottom: -50, right: -60, opacity: 0.5 },
    
    // Medium circles
    { width: 120, height: 120, top: '20%', left: -40, opacity: 0.3 },
    { width: 140, height: 140, top: '30%', right: -50, opacity: 0.3 },
    
    // Small circles
    { width: 70, height: 70, top: '15%', right: "45%", opacity: 0.3 },
    { width: 90, height: 90, bottom: '15%', left: 70, opacity: 0.4 },
    { width: 70, height: 70, top: '75%', right: 60, opacity: 0.6 },
  ];

  useEffect(() => {
    // Start content animation sequence
    Animated.sequence([
      // Fade in and scale up content
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      // Then animate ALL circles together simultaneously
      Animated.delay(200),
      Animated.parallel(
        circleAnims.map((anim) => 
          Animated.timing(anim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          })
        )
      )
    ]).start();
  }, [fadeAnim, scaleAnim, circleAnims]);

  return (
    <View style={styles.container}>
      {/* Render all circles dynamically with smooth animations */}
      {circles.map((circle, index) => (
        <Animated.View
          key={index}
          style={[
            styles.circleStyle,
            {
              width: circle.width,
              height: circle.height,
              borderRadius: circle.width / 2,
              top: circle.top,
              bottom: circle.bottom,
              left: circle.left,
              right: circle.right,
              opacity: circleAnims[index].interpolate({
                inputRange: [0, 1],
                outputRange: [0, circle.opacity],
              }),
              transform: [
                {
                  scale: circleAnims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.3, 1],
                  })
                },
                {
                  translateY: circleAnims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                  })
                }
              ]
            },
          ]}
        />
      ))}
      
      {/* Content with smooth entrance animation */}
      <Animated.Image
        source={require('../../../assets/images/logo.png')}
        style={[
          styles.logo,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }]
          }
        ]}
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
        "In the midst of winter, I found there was within me an invincible
        summer."
      </Animated.Text>
      
      <Animated.Text 
        style={[
          styles.author,
          {
            opacity: fadeAnim.interpolate({
              inputRange: [0, 0.7, 1],
              outputRange: [0, 0, 1],
            }),
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                })
              }
            ]
          }
        ]}
      >
        — Albert Camus
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 30,
    width: '100%',
    height: '100%',
    backgroundColor: '#2E5452',
    overflow: 'hidden',
  },
  logo: {
    width: 100,
    height: 100,
    color: '#FFFFFF',
    zIndex: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  quote: {
    width: 400,
    fontFamily: 'plusJakartaSans',
    fontSize: 28,
    fontWeight: '600',
    fontStyle: 'italic',
    lineHeight: 32,
    letterSpacing: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    zIndex: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },
  author: {
    fontFamily: 'plusJakartaSans',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '600',
    lineHeight: 14,
    letterSpacing: 10,
    textAlign: 'center',
    color: '#FFFFFF',
    zIndex: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  circleStyle: {
    backgroundColor: "#B4C48D",
    position: 'absolute',
    zIndex: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  }
});

export default QuoteScreen;
