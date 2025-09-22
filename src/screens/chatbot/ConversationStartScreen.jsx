// MoodIntroScreen.js
import React, { useRef, useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  PanResponder, 
  Animated, 
  Dimensions 
} from 'react-native';

const { width } = Dimensions.get('window');

const ConversationStartScreen = ({ navigation }) => {
  const [buttonWidth, setButtonWidth] = useState(0);
  const pan = useRef(new Animated.ValueXY()).current;
  const [isDragComplete, setIsDragComplete] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        // Only allow movement along x-axis in the positive direction (left to right)
        if (gesture.dx > 0) {
          // Limit movement to button width
          const maxX = Math.max(0, buttonWidth - 60); // Ensure maxX is at least 0
          const newX = Math.min(gesture.dx, maxX);
          pan.x.setValue(newX);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        const maxX = Math.max(0, buttonWidth - 60); // Ensure maxX is at least 0
        // If user dragged more than 75% of the way
        if (gesture.dx > (buttonWidth * 0.75) && maxX > 0) {
          Animated.spring(pan.x, {
            toValue: maxX,
            useNativeDriver: false,
          }).start(() => {
            setIsDragComplete(true);
            // Slight delay before navigating for visual feedback
            setTimeout(() => {
              navigation.navigate('MyConversation');
            }, 200);
          });
        } else {
          // Return to start if not dragged far enough
          Animated.spring(pan.x, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  // Reset animation state when screen is focused
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      pan.x.setValue(0);
      setIsDragComplete(false);
    });

    return unsubscribe;
  }, [navigation, pan]);

  // Calculate button background progress based on drag position
  const buttonFillWidth = pan.x.interpolate({
    inputRange: [0, Math.max(1, buttonWidth - 60)], // Ensure second value is greater than first
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const handleNavigateToConversation = () => {
    navigation.navigate('MyConversation');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Decorative Circles Background */}
        <View style={styles.circlesContainer} pointerEvents="none">
          {/* Large circles */}
          <View style={[styles.circle, styles.darkGreenCircle, { top: '10%', right: '5%', width: 100, height: 100 }]} />
          <View style={[styles.circle, styles.lightGreenCircle, { top: '5%', left: '5%', width: 80, height: 80 }]} />
          <View style={[styles.circle, styles.darkGreenCircle, { bottom: '25%', left: '10%', width: 120, height: 120 }]} />
          <View style={[styles.circle, styles.mediumGreenCircle, { bottom: '15%', right: '15%', width: 100, height: 100 }]} />
          <View style={[styles.circle, styles.lightGrayCircle, { bottom: '8%', right: '30%', width: 50, height: 50 }]} />
          
          {/* Outlined circles */}
          <View style={[styles.outlinedCircle, { top: '15%', right: '15%', width: 60, height: 60 }]} />
          <View style={[styles.outlinedCircle, { top: '20%', left: '20%', width: 80, height: 80 }]} />
          <View style={[styles.outlinedCircle, { top: '40%', left: '5%', width: 100, height: 100 }]} />
          <View style={[styles.outlinedCircle, { bottom: '5%', left: '10%', width: 130, height: 130 }]} />
        </View>

        {/* Content Area - Positioned in the bottom part */}
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Meet Mood Bot</Text>
            <Text style={styles.subtitle}>Always here to listen</Text>
            <Text style={styles.description}>
              For the 3AM overthinker, the Monday blues, and the 'I-don't-know-why-I'm-sad' kind of days.
            </Text>
          </View>

          {/* Simple Start Button */}
          <TouchableOpacity 
            style={styles.startButton} 
            onPress={handleNavigateToConversation}
          >
            <View style={styles.buttonContent}>
              <View style={styles.startIconContainer}>
                <Text style={styles.startIcon}>→</Text>
              </View>
              <Text style={styles.startButtonText}>Start</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConversationStartScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    paddingBottom: 40,
  },
  circlesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    position: 'absolute',
    borderRadius: 500,
  },
  outlinedCircle: {
    position: 'absolute',
    borderRadius: 500,
    borderWidth: 1,
    borderColor: '#7D8F7F',
  },
  darkGreenCircle: {
    backgroundColor: '#1C3936',
  },
  mediumGreenCircle: {
    backgroundColor: '#7D8F7F',
  },
  lightGreenCircle: {
    backgroundColor: '#A6B5A6',
  },
  lightGrayCircle: {
    backgroundColor: '#D9DFDA',
  },
  contentContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    paddingBottom: 50,
  },
  textContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C3936',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#1C3936',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#5C6D6B',
    lineHeight: 22,
  },
  startButton: {
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  startIconContainer: {
    backgroundColor: '#1C3936',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  startIcon: {
    color: 'white',
    fontSize: 18,
  },
  startButtonText: {
    color: '#1C3936',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 5,
  }
});
