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
        {/* Enhanced Decorative Circles Background */}
        <View style={styles.circlesContainer} pointerEvents="none">
          {/* Additional circles for top area */}
          
          {/* <View style={[styles.circle, styles.darkGreenCircle, { top: '-5%', right: '25%', width: 90, height: 90 }]} /> */}
          {/* <View style={[styles.circle, styles.lightGreenCircle, { top: '-10%', left: '30%', width: 120, height: 120 }]} /> */}
          <View style={[styles.circle, styles.mediumGreenCircle, { top: '5%', right: '30%', width: 60, height: 60 }]} />
          <View style={[styles.outlinedCircle, { top: '7%', left: '40%', width: 70, height: 70 }]} />
          {/* <View style={[styles.circle, styles.lightGrayCircle, { top: '13%', left: '30%', width: 40, height: 40 }]} /> */}
          <View style={[styles.outlinedCircle, { top: '25%', right: '30%', width: 90, height: 90 }]} />
          
          {/* Original circles - repositioned for better coverage */}
          <View style={[styles.circle, styles.darkGreenCircle, { top: '10%', right: '5%', width: 100, height: 100 }]} />
          <View style={[styles.circle, styles.lightGreenCircle, { top: '5%', left: '5%', width: 80, height: 80 }]} />
          <View style={[styles.circle, styles.lightGreenCircle, { bottom: '25%', right: '5%', width: 100, height: 100 }]} />
          <View style={[styles.circle, styles.lightGreenCircle, { top: '5%', left: '5%', width: 80, height: 80 }]} />
          <View style={[styles.circle, styles.darkGreenCircle, { bottom: '30%', left: '10%', width: 120, height: 120 }]} />
          {/* <View style={[styles.circle, styles.mediumGreenCircle, { bottom: '15%', right: '15%', width: 100, height: 100 }]} /> */}
          {/* <View style={[styles.circle, styles.lightGrayCircle, { bottom: '8%', right: '30%', width: 50, height: 50 }]} /> */}
          
          {/* Additional middle area circles */}
          <View style={[styles.circle, styles.lightGreenCircle, { top: '35%', right: '15%', width: 70, height: 70, opacity: 0.7 }]} />
          {/* <View style={[styles.outlinedCircle, { top: '45%', left: '35%', width: 60, height: 60 }]} /> */}
          <View style={[styles.circle, styles.lightGrayCircle, { top: '55%', right: '45%', width: 45, height: 45 }]} />
          {/* <View style={[styles.outlinedCircle, { top: '32%', left: '5%', width: 70, height: 70 }]} /> */}
          <View style={[styles.circle, styles.darkGreenCircle, { top: '32%', right: '8%', width: 85, height: 85 }]} />
          <View style={[styles.circle, styles.lightGreenCircle, { top: '45%', left: '25%', width: 50, height: 50, opacity: 0.7 }]} />
          <View style={[styles.outlinedCircle, { top: '48%', right: '28%', width: 65, height: 65 }]} />
          <View style={[styles.circle, styles.darkGreenCircle, { top: '10%', left: '-5%', width: 140, height: 140 }]} />
          <View style={[styles.outlinedCircle, { top: '40%', right: '-10%', width: 120, height: 120 }]} />
           {/* <View style={[styles.circle, styles.mediumGreenCircle, { top: '50%', left: '50%', width: 45, height: 45 }]} /> */}
          <View style={[styles.circle, styles.darkGreenCircle, { top: '55%', right: '38%', width: 50, height: 50 }]} />
          {/* Original outlined circles */}
          <View style={[styles.outlinedCircle, { top: '15%', right: '15%', width: 60, height: 60 }]} />
          <View style={[styles.outlinedCircle, { top: '20%', left: '20%', width: 80, height: 80 }]} />
          <View style={[styles.outlinedCircle, { top: '40%', left: '5%', width: 100, height: 100 }]} />
          {/* <View style={[styles.outlinedCircle, { bottom: '5%', left: '10%', width: 130, height: 130 }]} /> */}
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
    overflow: 'hidden',
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
