import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Onboarding1 = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      source={require('../../../assets/images/image.png')}
      style={styles.logo}
      resizeMode="contain"
    />
    <Text style={styles.title}>Welcome to MoodBro</Text>
    <Text style={styles.description}>
      Your mindful mental health AI companion 🌱
    </Text>
    <Image
      source={require('../../../assets/onboarding/w1.png')}
      style={styles.image}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Onboarding2')}
    >
      <Text style={styles.buttonText}>Get Started</Text>
      <Text style={styles.arrowIcon}>→</Text>
    </TouchableOpacity>
    <Text style={styles.description1}>
      Already have an account?
      <Text style={styles.signin}>Sign In.</Text>
    </Text>
  </View>
);

export default Onboarding1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'offwhite',
    // paddingTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    gap: 15,
  },
  logo: {
    width: 80,
    height: 80,
    zIndex: 5,
  },
  image: {
    width: 350,
    height: 350,
    margin: 25,
    resizeMode: 'contain',
    justifyContent: 'top',
  },
  title: {
    width: 343,
    marginTop: 10,
    fontFamily: 'Urbanist',
    fontSize: 40,
    color: '#4B3425',
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  description: {
    width: 250,
    marginTop: 10,
    height: 58,
    fontFamily: 'Urbanist',
    fontSize: 20,
    fontStyle: 'italic',
    letterSpacing: 1.5,
    textAlign: 'center',
    color: 'black',
  },
  button: {
    marginTop: 50,
    width: 184,
    height: 56,
    borderRadius: 1000,
    backgroundColor: '#4B3425',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 5,
  },
  buttonText: {
    fontFamily: 'Urbanist',
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 18,
    // letterSpacing: -1,
    color: '#FFFFFF',
  },
  arrowIcon: {
    fontSize: 30,
    marginBottom: 10,
    // marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  signin: {
    // width: 250,
    // marginTop: 10,
    // height: 58,
    // fontFamily: 'Urbanist',
    // fontSize: 20,
    fontStyle: 'normal',
    // letterSpacing: 1.5,
    // textAlign: 'center',
    color: 'brown',
    fontWeight: '700',
    paddingLeft: 5,
    textDecorationLine: 'underline',
  },
  
  description1: {
    width: 250,
    marginTop: 25,
    height: 58,
    fontFamily: 'Urbanist',
    fontSize: 16,
    fontStyle: 'italic',
    letterSpacing: 1.25,
    textAlign: 'center',
    color: 'black',

  },

  buttonicon: {
    width: 25,
    height: 25,
    backgroundColor: '#FFFFFF',
  },
});
