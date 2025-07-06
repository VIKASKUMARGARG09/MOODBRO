import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet, View, Platform } from 'react-native';

const FetchingDataScreen = ({ navigation }) => {
  const fade = useRef(new Animated.Value(0)).current;
  
  // Create separate animated values for each circle
  const circleAnims = useRef([
    new Animated.Value(0), // Top circle
    new Animated.Value(0), // Bottom circle  
    new Animated.Value(0), // Left circle
    new Animated.Value(0), // Right circle
  ]).current;

  // Circle configurations - properly centered
  const circles = [
    { top: -125, left: '50%', marginLeft: -125 }, // Top circle - centered horizontally
    { bottom: -125, left: '50%', marginLeft: -125 }, // Bottom circle - centered horizontally
    { left: -125, top: '50%', marginTop: -125 }, // Left circle - centered vertically
    { right: -125, top: '50%', marginTop: -125 }, // Right circle - centered vertically
  ];

  useEffect(() => {
    // Start with fade in animation
    Animated.timing(fade, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Animate circles coming in with staggered timing
    const circleAnimations = circleAnims.map((anim, index) => 
      Animated.timing(anim, {
        toValue: 1,
        duration: 1000,
        delay: index * 150, // Stagger each circle by 150ms
        useNativeDriver: true,
      })
    );

    // Start all circle animations simultaneously but with delays
    Animated.parallel(circleAnimations).start();

    const timer = setTimeout(() => {
      navigation.navigate('Quote');
    }, 2200);

    return () => clearTimeout(timer);
  }, [fade, navigation, circleAnims]);

  return (
    <Animated.View style={[styles.container, { opacity: fade }]}>
      {/* Render all circles dynamically with individual animations */}
      {circles.map((circle, index) => (
        <Animated.View
          key={index}
          style={[
            styles.circleStyle, 
            circle,
            {
              opacity: circleAnims[index],
              transform: [
                {
                  scale: circleAnims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.3, 1], // Start small and grow to full size
                  })
                },
                {
                  translateY: circleAnims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0], // Slide in from below
                  })
                }
              ]
            }
          ]}
        />
      ))}

      <Animated.Text 
        style={[
          styles.textstyle,
          {
            opacity: fade,
            transform: [
              {
                scale: fade.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                })
              }
            ]
          }
        ]}
      >
        99%
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E5452',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circleStyle: {
    width: 250,
    height: 250,
    backgroundColor: '#93A99D', 
    borderRadius: 125,
    position: 'absolute',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  textstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 40,
    fontWeight: '700',
    fontStyle: 'normal',
    letterSpacing: -2,
    color: 'white',
    zIndex: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});

export default FetchingDataScreen;
