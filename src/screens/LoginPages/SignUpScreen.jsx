import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import FONTS from '../../constants/fonts';

const SignUpScreen = ({ navigation }) => {
  const [isValidEmail, setIsValidEmail] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header with texture background */}
      <ImageBackground
        source={require('../../../assets/icons/texture.png')}
        style={styles.header}
        resizeMode="cover"
      >
        <Text style={styles.headerTitle}>Join Us!</Text>
        <Text style={styles.welcomeText}>Create your MoodBro account</Text>
      </ImageBackground>

      {/* Content with border that matches texture curves */}
      <View style={styles.content}>
        <View style={styles.contentInner}>
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

        <TouchableOpacity 
          style={styles.chatbotLink} 
          onPress={() => navigation.navigate('ChatbotWelcome')}
        >
          <Text style={styles.chatbotText}>
            Try Chatbot Dashboard
          </Text>
        </TouchableOpacity>
        </View>
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
     fontSize: 20,
     fontStyle: 'italic',
     color: '#FFFFFF',
     marginTop: 10,
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
  label: {
    fontSize: 14,
    color: 'black',
    marginBottom: 8,
    fontWeight: '500',
    fontFamily: FONTS.JAKARTA_MEDIUM,
  },
  inputContainer: {
    backgroundColor: '#e2e2e2',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
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
    color: '#2E5452',
    fontFamily: FONTS.JAKARTA_REGULAR,
  },
  dropdownIcon: {
    fontSize: 16,
    color: '#2E5452',
  },
  eyeIcon: {
    fontSize: 15,
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
    borderBlockColor: '#2E5452',
    borderWidth: 0.5,
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
    color: '#666',
    flex: 1,
    fontFamily: FONTS.JAKARTA_REGULAR,
  },
  linkText: {
    color: '#2E5452',
    fontWeight: '600',
    fontFamily: FONTS.JAKARTA_SEMIBOLD,
  },
  signUpBtn: {
    backgroundColor: '#2E5452',
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
    fontFamily: FONTS.JAKARTA_SEMIBOLD,
  },
  bottomLinkText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    fontFamily: FONTS.JAKARTA_REGULAR,
  },
  linkBold: {
    color: '#2E5452',
    fontWeight: '600',
    fontFamily: FONTS.JAKARTA_SEMIBOLD,
  },
  chatbotLink: {
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 10,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    marginHorizontal: 20,
  },
  chatbotText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: FONTS.JAKARTA_SEMIBOLD,
  },
});
