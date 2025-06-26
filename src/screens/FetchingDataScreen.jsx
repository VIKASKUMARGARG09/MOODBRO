import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';
import QuoteScreen from '../screens/QuoteScreen';


const FetchingDataScreen = ({ navigation }) => {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
  Animated.timing(fade, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  const timer = setTimeout(() => {
    navigation.navigate('Quote');
  }, 2200);

  return () => clearTimeout(timer);
}, [fade, navigation]);


  return (
    <Animated.View style={[styles.container, { opacity: fade }]}>
      <Text style={styles.title}>Fetching Wisdom...</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#fff',
  },
});

export default FetchingDataScreen;