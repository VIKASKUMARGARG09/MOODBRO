import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Forgot Password</Text>
      <Text style={styles.description}>
        Select contact details where you want to reset your password.
      </Text>

      <TouchableOpacity style={styles.option}>
        <View style={styles.iconContainer}>
          <Image source={require('../../../assets/icons/lock.png')} style={styles.optionIcon} />
        </View>
        <Text style={styles.optionText}>Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.iconContainer}>
          <Image source={require('../../../assets/icons/2FA.png')} style={styles.optionIcon} />
        </View>
        <Text style={styles.optionText}>Use 2FA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <View style={styles.iconContainer}>
          <Image source={require('../../../assets/icons/authenticator.png')} style={styles.optionIcon} />
        </View>
        <Text style={styles.optionText}>Google Authenticator</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendText}>Send Password 🔒</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F0',
    padding: 24,
    paddingTop: 60,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  backIcon: {
    fontSize: 18,
    color: '#4B3425',
  },
  heading: {
    fontSize: 24,
    color: '#4B3425',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 25,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F8E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
  optionText: {
    fontSize: 16,
    color: '#4B3425',
    fontWeight: '600',
  },
  sendButton: {
    backgroundColor: '#4B3425',
    paddingVertical: 16,
    borderRadius: 25,
    marginTop: 40,
    alignItems: 'center',
  },
  sendText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
