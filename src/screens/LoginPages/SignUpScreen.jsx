import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  SafeAreaView,
  ScrollView,
  Dimensions
} from 'react-native';
import FONTS from '../../constants/fonts';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const screenHeight = Dimensions.get('window').height;

  const handleSignUp = () => {
    // Implement sign up functionality
    console.log('Sign up with:', email, password, confirmPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Abstract circles background */}
      <View style={styles.circlesContainer}>
 <View style={[styles.outlinedCircle, { top: '7%', left: '40%', width: 70, height: 70 }]} />
                 <View style={[styles.outlinedCircle, { top: '25%', right: '30%', width: 90, height: 90 }]} />
                 <View style={[styles.circle, styles.darkGreenCircle, { top: '10%', right: '5%', width: 100, height: 100 }]} />
                 <View style={[styles.circle, styles.lightGreenCircle, { top: '5%', left: '5%', width: 80, height: 80 }]} />
                 {/* <View style={[styles.circle, styles.lightGreenCircle, { bottom: '25%', right: '5%', width: 100, height: 100 }]} /> */}
                 <View style={[styles.circle, styles.lightGreenCircle, { top: '5%', left: '5%', width: 80, height: 80 }]} />
                 {/* <View style={[styles.outlinedCircle, { bottom: '31%', left: '-15%', width: 120, height: 120 }]} /> */}
                  <View style={[styles.circle, styles.lightGreenCircle, { top: '35%', right: '15%', width: 70, height: 70, opacity: 0.7 }]} />
                 {/* <View style={[styles.circle, styles.lightGrayCircle, { top: '55%', right: '45%', width: 45, height: 45 }]} /> */}
                 <View style={[styles.circle, styles.lightGrayCircle, { top: '40%', right: '45%', width: 5, height: 5 }]} />
                 <View style={[styles.circle, styles.lightGrayCircle, { top: '35%', right: '55%', width: 50, height: 50 }]} />
                 <View style={[styles.circle, styles.darkGreenCircle, { top: '32%', right: '8%', width: 85, height: 85 }]} />
                 {/* <View style={[styles.circle, styles.lightGreenCircle, { top: '45%', left: '25%', width: 50, height: 50, opacity: 0.7 }]} /> */}
                 <View style={[styles.circle, styles.lightGrayCircle,{ top: '45%', right: '28%', width: 65, height: 65 }]} />
                 <View style={[styles.circle, styles.darkGreenCircle, { top: '18%', left: '-5%', width: 140, height: 140 }]} />
                 <View style={[styles.outlinedCircle, { top: '48%', right: '-10%', width: 120, height: 120 }]} />
                  {/* <View style={[styles.circle, styles.darkGreenCircle, { top: '55%', right: '38%', width: 50, height: 50 }]} /> */}
                 <View style={[styles.outlinedCircle, { top: '15%', right: '15%', width: 60, height: 60 }]} />
                 <View style={[styles.outlinedCircle, { top: '20%', left: '20%', width: 80, height: 80 }]} />
                 <View style={[styles.outlinedCircle, { top: '47%', left: '-10%', width: 100, height: 100 }]} />
      </View>

      {/* Adding a spacer to push content down */}
      <View style={{height: screenHeight * 0.25}} />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          {/* App title and tagline */}
          <Text style={styles.appTitle}>Create Account</Text>
          <Text style={styles.appTagline}>Sign up to get started with MOOD-Bro</Text>
          
          {/* Email input */}
          <View style={styles.inputContainer}>
            <Image 
              source={require('../../../assets/icons/2FA.png')} 
              style={styles.inputIcon} 
            />
            <TextInput
              placeholder="Enter your email"
              style={styles.input}
              placeholderTextColor="#999"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          
          {/* Password input */}
          <View style={styles.inputContainer}>
            <Image 
              source={require('../../../assets/icons/lock.png')} 
              style={styles.inputIcon} 
            />
            <TextInput
              placeholder="Enter your password"
              style={styles.input}
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image 
                source={showPassword ? 
                  require('../../../assets/icons/insta.png') : 
                  require('../../../assets/icons/lock.png')} 
                style={styles.eyeIcon} 
              />
            </TouchableOpacity>
          </View>
          
          {/* Confirm Password input */}
          <View style={styles.inputContainer}>
            <Image 
              source={require('../../../assets/icons/lock.png')} 
              style={styles.inputIcon} 
            />
            <TextInput
              placeholder="Confirm your password"
              style={styles.input}
              placeholderTextColor="#999"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Image 
                source={showConfirmPassword ? 
                  require('../../../assets/icons/insta.png') : 
                  require('../../../assets/icons/lock.png')} 
                style={styles.eyeIcon} 
              />
            </TouchableOpacity>
          </View>

          {/* Terms and conditions checkbox */}
          <View style={styles.checkboxContainer}>
            <TouchableOpacity style={styles.checkbox}>
              <Text style={styles.checkmark}>✓</Text>
            </TouchableOpacity>
            <Text style={styles.checkboxText}>
              I Agree with the <Text style={styles.linkText}>Terms & Conditions</Text>
            </Text>
          </View>

          {/* Sign up button */}
          <TouchableOpacity 
            style={[styles.button, styles.signUpButton]}
            onPress={handleSignUp}
          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Already have account link */}
          <View style={styles.accountContainer}>
            <Text style={styles.accountText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
              <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          
          {/* Go to subscription button
          <TouchableOpacity 
            style={[styles.button, styles.subscriptionButton]}
            onPress={() => navigation.navigate('SubscriptionScreen')}
          >
            <Text style={styles.subscriptionButtonText}>Go to Subscription</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  circlesContainer: {
    ...StyleSheet.absoluteFillObject,
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
    borderColor: '#7D8F7D',
  },
  darkGreenCircle: {
    backgroundColor: '#1C3936',
  },
  mediumGreenCircle: {
    backgroundColor: '#7D8F7D',
  },
  lightGreenCircle: {
    backgroundColor: '#A6B5A6',
  },
  lightGrayCircle: {
    backgroundColor: '#D9DFDA',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingBottom: 20,
    justifyContent: 'flex-end',
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 25,
    height: 54,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    fontFamily: FONTS.JAKARTA_MEDIUM,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    borderColor: '#2E5452',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkmark: {
    color: '#2E5452',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxText: {
    fontSize: 14,
    color: '#666666',
    fontFamily: FONTS.JAKARTA_REGULAR,
  },
  linkText: {
    color: '#2E5452',
    fontWeight: '600',
    fontFamily: FONTS.JAKARTA_SEMIBOLD,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    borderRadius: 25,
    marginBottom: 16,
  },
  signUpButton: {
    backgroundColor: '#2E5452',
    borderColor: '#2E5452',
  },
  signUpText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: FONTS.JAKARTA_SEMIBOLD,
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
    marginVertical: 15,
  },
  accountText: {
    fontSize: 14,
    color: '#666666',
    fontFamily: FONTS.JAKARTA_REGULAR,
  },
  loginText: {
    fontSize: 14,
    color: '#2E5452',
    fontWeight: '600',
    marginLeft: 4,
    fontFamily: FONTS.JAKARTA_SEMIBOLD,
  },
});
