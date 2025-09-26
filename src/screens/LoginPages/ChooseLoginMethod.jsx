import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView
} from 'react-native';
import FONTS from '../../constants/fonts';

const ChooseLoginMethod = ({ navigation }) => {
  // Update these handler functions
  const handleGoogleLogin = () => {
    // Navigate to sign in screen
    navigation.navigate('SignInScreen');
  };

  const handleEmailLogin = () => {
    // Navigate to sign up screen
    navigation.navigate('SignUpScreen');
  };

  const handleLogIn = () => {
    // Navigate to the login page
    navigation.navigate('LoginDetailsScreen'); // Create this screen for email/password input
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Abstract circles background */}
      <View style={styles.circlesContainer}>
       {/* Add circles here  */}
       <View style={[styles.circle, styles.mediumGreenCircle, { top: '5%', right: '30%', width: 60, height: 60 }]} />
                 <View style={[styles.outlinedCircle, { top: '7%', left: '40%', width: 70, height: 70 }]} />
                 <View style={[styles.outlinedCircle, { top: '25%', right: '30%', width: 90, height: 90 }]} />
                 <View style={[styles.circle, styles.darkGreenCircle, { top: '10%', right: '5%', width: 100, height: 100 }]} />
                 <View style={[styles.circle, styles.lightGreenCircle, { top: '5%', left: '5%', width: 80, height: 80 }]} />
                 <View style={[styles.circle, styles.lightGreenCircle, { bottom: '25%', right: '5%', width: 100, height: 100 }]} />
                 <View style={[styles.circle, styles.lightGreenCircle, { top: '5%', left: '5%', width: 80, height: 80 }]} />
                 <View style={[styles.outlinedCircle, { bottom: '31%', left: '-15%', width: 120, height: 120 }]} />
                  <View style={[styles.circle, styles.lightGreenCircle, { top: '35%', right: '15%', width: 70, height: 70, opacity: 0.7 }]} />
                 <View style={[styles.circle, styles.lightGrayCircle, { top: '55%', right: '45%', width: 45, height: 45 }]} />
                 <View style={[styles.circle, styles.lightGrayCircle, { top: '40%', right: '45%', width: 5, height: 5 }]} />
                 <View style={[styles.circle, styles.lightGrayCircle, { top: '35%', right: '55%', width: 50, height: 50 }]} />
                 <View style={[styles.circle, styles.darkGreenCircle, { top: '32%', right: '8%', width: 85, height: 85 }]} />
                 <View style={[styles.circle, styles.lightGreenCircle, { top: '45%', left: '25%', width: 50, height: 50, opacity: 0.7 }]} />
                 <View style={[styles.outlinedCircle, { top: '48%', right: '28%', width: 65, height: 65 }]} />
                 <View style={[styles.circle, styles.darkGreenCircle, { top: '18%', left: '-5%', width: 140, height: 140 }]} />
                 <View style={[styles.outlinedCircle, { top: '40%', right: '-10%', width: 120, height: 120 }]} />
                  <View style={[styles.circle, styles.darkGreenCircle, { top: '55%', right: '38%', width: 50, height: 50 }]} />
                 <View style={[styles.outlinedCircle, { top: '15%', right: '15%', width: 60, height: 60 }]} />
                 <View style={[styles.outlinedCircle, { top: '20%', left: '20%', width: 80, height: 80 }]} />
                 <View style={[styles.outlinedCircle, { top: '40%', left: '5%', width: 100, height: 100 }]} />
                 
      </View>

      <View style={styles.contentContainer}>
        {/* App title and tagline */}
        <Text style={styles.appTitle}>Explore your MOOD-Bro</Text>
        <Text style={styles.appTagline}>For the 3AM overthinker, the Monday</Text>

        {/* Login buttons */}
        <TouchableOpacity 
          style={styles.loginButton1} 
          onPress={handleGoogleLogin}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleEmailLogin}
        >
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>

        {/* Subscription button (kept from original)
        <TouchableOpacity 
          style={[styles.loginButton, styles.subscriptionButton]}
          onPress={() => navigation.navigate('SubscriptionScreen')}
        >
          <Text style={styles.subscriptionButtonText}>Go to Subscription</Text>
        </TouchableOpacity> */}

        {/* Already have account link */}
        {/* <View style={styles.accountContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLogIn}>
            <Text style={styles.logInText}>Log in</Text>
          </TouchableOpacity> 
        </View>*/}
      </View>
    </SafeAreaView>
  );
};

export default ChooseLoginMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  circlesContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    borderRadius: 100,
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
  circleOutline: {
    position: 'absolute',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#2E5452',
    backgroundColor: 'transparent',
  },
  // Main colored circles
  circle1: {
    width: 100,
    height: 100,
    backgroundColor: '#2E5452',
    left: 70,
    top: 150,
  },
  circle2: {
    width: 60,
    height: 60,
    backgroundColor: '#8AA797',
    left: 30,
    top: 120,
  },
  circle3: {
    width: 90,
    height: 90,
    backgroundColor: '#8AA797',
    right: 50,
    top: 140,
  },
  circle4: {
    width: 40,
    height: 40,
    backgroundColor: '#2E5452',
    right: 70,
    bottom: 160,
  },
  circle5: {
    width: 40,
    height: 40,
    backgroundColor: '#E0E0D6',
    right: 90,
    top: 240,
  },
  // Circle outlines
  outline1: {
    width: 120,
    height: 120,
    left: 10,
    top: 90,
  },
  outline2: {
    width: 70,
    height: 70,
    right: 20,
    top: 30,
  },
  outline3: {
    width: 150,
    height: 150,
    right: -50,
    top: 100,
  },
  outline4: {
    width: 60,
    height: 60,
    left: 150,
    top: 20,
  },
  outline5: {
    width: 100,
    height: 100,
    left: -30,
    bottom: 70,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#2E5452',
    fontFamily: FONTS.JAKARTA_BOLD,
    marginBottom: 8,
  },
  appTagline: {
    fontSize: 16,
    color: '#2E5452',
    fontFamily: FONTS.JAKARTA_REGULAR,
    marginBottom: 30,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2E5452',
    borderRadius: 25,
    height: 54,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  loginButton1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#2E5452',
    borderRadius: 25,
    height: 54,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#333333',
    fontFamily: FONTS.JAKARTA_MEDIUM,
  },
  buttonText: {
    fontSize: 16,
    color: '#333333',
    fontFamily: FONTS.JAKARTA_MEDIUM,
  },
  subscriptionButton: {
    backgroundColor: '#2E5452',
    borderColor: '#93A99D',
    marginTop: 10,
  },
  subscriptionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: FONTS.JAKARTA_SEMIBOLD,
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  accountText: {
    fontSize: 14,
    color: '#666666',
    fontFamily: FONTS.JAKARTA_REGULAR,
  },
  logInText: {
    fontSize: 14,
    color: '#2E5452',
    fontWeight: '600',
    marginLeft: 4,
    fontFamily: FONTS.JAKARTA_SEMIBOLD,
  },
  chatbotLink: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#4caf50',
    borderRadius: 8,
  },
  chatbotText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: FONTS.JAKARTA_SEMIBOLD,
  },
});
