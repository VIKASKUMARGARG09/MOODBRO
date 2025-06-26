// src/screens/SplashScreen.jsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    console.log('SplashScreen mounted');
    const timer = setTimeout(() => navigation.navigate('FetchingData'), 1500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/image.png')}  // adjust this path to your actual location
        style={styles.logo}
        resizeMode="contain"
      />

      {/* <Text style={styles.text}>🌞 SplashScreen is alive!</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFA726',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
		height: "100%",
    // justifyContent: 'center',
    // alignItems: 'center', 
		backgroundColor: "#F7F4F2",
		// marginRight: 48,
		borderRadius: 40,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  logo:{
    width: 123,
		height: 119,
		marginTop: 302,
		marginBottom: 312,
		marginHorizontal: 150,
  }
});

export default SplashScreen;