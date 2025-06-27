import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [isValidEmail, setIsValidEmail] = useState(true);

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
        <Text style={styles.heading}>Sign Up For Free</Text>

        <Text style={styles.label}>Email Address</Text>
        <View style={[styles.inputContainer, !isValidEmail && styles.errorContainer]}>
          <Image 
            source={require('../../../assets/icons/2FA.png')} 
            style={styles.inputIcon} 
          />
          <TextInput
            placeholder="Enter your email..."
            style={styles.input}
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
          <TouchableOpacity>
            <Text style={styles.dropdownIcon}>⌄</Text>
          </TouchableOpacity>
        </View>
        
        {!isValidEmail && (
          <View style={styles.errorAlert}>
            <Text style={styles.errorIcon}>⚠</Text>
            <Text style={styles.errorText}>Invalid Email Address!</Text>
          </View>
        )}

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

        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox}>
            <Text style={styles.checkmark}>✓</Text>
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            I Agree with the <Text style={styles.linkText}>Terms & Conditions</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpText}>Sign Up →</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.bottomLinkText}>
            Already have an account? <Text style={styles.linkBold}>Sign In.</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

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
    borderWidth: 1.5,
    borderColor: '#9BB068',
    height: 50,
  },
  errorContainer: {
    borderColor: '#FF6B6B',
    backgroundColor: '#FFF0F0',
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
  errorAlert: {
    backgroundColor: '#FFD4D4',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorIcon: {
    fontSize: 16,
    marginRight: 8,
    color: '#FF6B6B',
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 14,
    fontWeight: '500',
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
    backgroundColor: '#9BB068',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  linkText: {
    color: '#9BB068',
    fontWeight: '600',
  },
  signUpBtn: {
    backgroundColor: '#4B3425',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  signUpText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomLinkText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  linkBold: {
    color: '#D2691E',
    fontWeight: '600',
  },
});
