import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const QuoteScreen = () => {
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
    // { width: 100, height: 100, bottom: '25%', left: -30, opacity: 0.6 },
    // { width: 130, height: 130, bottom: '35%', right: -45, opacity: 0.3 },
    
    // Small circles
    // { width: 80, height: 80, top: '60%', left: 50, opacity: 0.7 },
    { width: 70, height: 70, top: '15%', right: "45%", opacity: 0.3 },
    { width: 90, height: 90, bottom: '15%', left: 70, opacity: 0.4 },
    { width: 70, height: 70, top: '75%', right: 60, opacity: 0.6 },
    
    // Additional random circles
    // { width: 50, height: 50, top: '45%', left: -20, opacity: 0.8 },
    // { width: 110, height: 110, top: '80%', left: -50, opacity: 0.25 },
    // { width: 75, height: 75, bottom: '50%', right: -30, opacity: 0.6 },
  ];

  return (
    <View style={styles.container}>
      {/* Render all circles dynamically */}
      {circles.map((circle, index) => (
        <View
          key={index}
          style={[
            styles.circleStyle,
            {
              width: circle.width,
              height: circle.height,
              borderRadius: circle.width / 2, // Perfect circle
              top: circle.top,
              bottom: circle.bottom,
              left: circle.left,
              right: circle.right,
              opacity: circle.opacity,
            },
          ]}
        />
      ))}
      
      {/* Content */}
      <Image
        source={require('../../../assets/images/image.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.quote}>
        "In the midst of winter, I found there was within me an invincible
        summer."
      </Text>
      <Text style={styles.author}>— Albert Camus</Text>
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
    backgroundColor: '#9BB068',
    overflow: 'hidden',
  },
  logo: {
    width: 100,
    height: 100,
    color: '#FFFFFF',
    zIndex: 10,
  },
  quote: {
    width: 400,
    fontFamily: 'Urbanist',
    fontSize: 28,
    fontWeight: '600',
    fontStyle: 'italic',
    lineHeight: 32,
    letterSpacing: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    zIndex: 10,
  },
  author: {
    fontFamily: 'Urbanist',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '600',
    lineHeight: 14,
    letterSpacing: 10,
    textAlign: 'center',
    color: '#FFFFFF',
    zIndex: 10,
  },
  circleStyle: {
    backgroundColor: "#B4C48D",
    position: 'absolute',
    zIndex: 1,
  }
});

export default QuoteScreen;
