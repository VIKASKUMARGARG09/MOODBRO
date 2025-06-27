import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with logo */}
      <View style={styles.header}>
        <Image 
          source={require('../../../assets/icons/logotransparent.png')} 
          style={styles.logo} 
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>Sign In To freud.ai</Text>

        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputContainer}>
          <Image 
            source={require('../../../assets/icons/2FA.png')} 
            style={styles.inputIcon} 
          />
          <TextInput
            placeholder="princesskaguya@gmail.co"
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
          <TouchableOpacity>
            <Text style={styles.dropdownIcon}>⌄</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <Image 
            source={require('../../../assets/icons/lock.png')} 
            style={styles.inputIcon} 
          />
          <TextInput
            placeholder="Enter your password..."
            style={styles.input}
            placeholderTextColor="#999"
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.eyeIcon}>👁</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signInBtn}>
          <Text style={styles.signInText}>Sign In →</Text>
        </TouchableOpacity>

        {/* Social Login */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <Image source={require('../../../assets/icons/fb.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image source={require('../../../assets/icons/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image source={require('../../../assets/icons/insta.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.linkText}>Don't have an account? <Text style={styles.linkBold}>Sign In.</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.forgotText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F0',
  },
  header: {
    backgroundColor: '#9BB068',
    height: 180,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 60,
    height: 60,
    tintColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 24,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4B3425',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#4B3425',
    marginBottom: 8,
    fontWeight: '500',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#9BB068',
    height: 50,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  dropdownIcon: {
    fontSize: 16,
    color: '#999',
  },
  eyeIcon: {
    fontSize: 18,
  },
  signInBtn: {
    backgroundColor: '#4B3425',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  signInText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },
  socialBtn: {
    width: 50,
    height: 50,
    backgroundColor: '#E8E8E0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  linkText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  linkBold: {
    color: '#D2691E',
    fontWeight: '600',
  },
  forgotText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#D2691E',
    fontWeight: '500',
  },
});
