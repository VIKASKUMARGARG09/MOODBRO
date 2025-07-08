import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
  Platform
} from 'react-native';
import FONTS from '../../constants/fonts';

const FindFelloLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    // Dummy authentication check
    if (email === 'test@example.com' && password === 'password123') {
      Alert.alert('Success', 'Login successful');
      // navigation.navigate('HomeScreen'); // Navigate if needed
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with texture background */}
      <ImageBackground
        source={require('../../../assets/icons/texture.png')}
        style={styles.header}
        resizeMode="cover"
      >
        <Text style={styles.headerTitle}>Hello!</Text>
        <Text style={styles.welcomeText}>Welcome to MoodBro</Text>
      </ImageBackground>

      {/* Login content with border that matches texture curves */}
      <View style={styles.content}>
        <View style={styles.contentInner}>
          <Text style={styles.heading}>Login</Text>

          <TextInput
            placeholder="Enter your Email"
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Enter your Password"
            style={styles.input}
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            
          />
        
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.orLoginText}>Or Login with</Text>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <Image source={require('../../../assets/icons/google.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Image source={require('../../../assets/icons/facebook.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Image source={require('../../../assets/icons/insta.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.signUpText}>
              Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FindFelloLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F0',
  },
  header: {
    height: 350,
    // borderBottomLeftRadius: 250,
    // borderBottomRightRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -50, // Negative margin to overlap with content
    overflow: 'hidden',
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 152,
    textspacing: 5,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: FONTS.SONGBIRD,
    textShadowColor: 'rgba(154, 96, 96, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  welcomeText: {
    fontSize: 24,
    fontStyle: 'italic',
    color: '#FFFFFF',
    fontFamily: FONTS.JAKARTA_ITALIC,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  content: {
    flex: 1,
    // paddingTop: 40, // Space from header
    zIndex: 2,
  },
  contentInner: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50, // Match header's bottom left radius
    borderTopRightRadius: 50, // Match header's bottom right radius
    paddingHorizontal: 25,
    paddingTop: 50,
    // Border that follows the curved edge
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth:3,
    borderColor: '#6F7D6A',
    // Shadow for better definition
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    color: '#2E5452',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: FONTS.JAKARTA_BOLD,
  },
  input: {
    backgroundColor: '#e2e2e2',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2E5452',
    height: 50,
    fontSize: 16,
    color: '#333',
    fontFamily: FONTS.JAKARTA_REGULAR,
  },
  forgotText: {
    fontSize: 14,
    color: '#2E5452',
    fontWeight: '500',
    marginBottom: 20,
    fontFamily: FONTS.JAKARTA_MEDIUM,
  },
  loginBtn: {
    backgroundColor: '#2E5452',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: FONTS.JAKARTA_SEMIBOLD,
  },
  orLoginText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#2E5452',
    marginBottom: 30,
    fontFamily: FONTS.JAKARTA_REGULAR,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },
  socialBtn: {
    width: 60,
    height: 60,
    backgroundColor: '#e2e2e2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  signUpText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    fontFamily: FONTS.JAKARTA_REGULAR,
  },
  signUpLink: {
    color: '#2E5452',
    fontWeight: '600',
    fontFamily: FONTS.JAKARTA_SEMIBOLD,
  },
});
