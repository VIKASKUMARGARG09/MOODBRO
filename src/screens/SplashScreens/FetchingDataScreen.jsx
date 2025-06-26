import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet, View } from 'react-native';
// import QuoteScreen from '../screens/QuoteScreen';

const FetchingDataScreen = ({ navigation }) => {
  const fade = useRef(new Animated.Value(0)).current;

  // Circle configurations - moved outside return
  const circles = [
    { top: -140, left: '50%', marginLeft: -140 }, // Top circle
    { bottom: -140, left: '50%', marginLeft: -140 }, // Bottom circle
    { left: -140, top: '50%', marginTop: -140 }, // Left circle
    { right: -140, top: '50%', marginTop: -140 }, // Right circle
  ];

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.navigate('Quote');
    }, 2200);

    return () => clearTimeout(timer);
  }, [fade, navigation]);

  return (
    <Animated.View style={[styles.container, { opacity: fade }]}>
      {/* Render all circles dynamically */}
      {circles.map((circle, index) => (
        <View
          key={index}
          style={[styles.circleStyle, circle]}
        />
      ))}

      <Text style={styles.textstyle}>99%</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE814B',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circleStyle: {
    width: 280,
    height: 280,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius: 140,
    position: 'absolute',
  },
  textstyle: {
    width: 55,
    height: 38,
    fontFamily: 'Urbanist',
    fontSize: 35,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 38,
    letterSpacing: -2,
    color: '#fff',
    zIndex: 2, // Ensure text appears above circles
  },
});

export default FetchingDataScreen;
