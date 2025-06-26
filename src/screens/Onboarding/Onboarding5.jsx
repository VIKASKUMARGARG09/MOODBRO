import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const Onboarding5 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Background Image - 70% of screen */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/onboarding/w5.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        
        {/* Page indicators overlaid on image */}
        <View style={styles.pageIndicators}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
      </View>

      {/* Content Container - 30% of screen with rounded top */}
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.step}>STEP 4</Text>
          <Text style={styles.title}>
            Ready to Start Your{'\n'}
            <Text style={styles.titlePurple}>Wellness Journey</Text>?
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('SplashScreen')}
        >
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D5FF',
  },
  imageContainer: {
    height: height * 0.7,
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8D5FF',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  pageIndicators: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(94, 48, 6, 0.4)',
  },
  activeDot: {
    backgroundColor: 'rgba(94, 49, 6, 0.79)',
    width: 20,
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 225,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 50,
    marginTop: -100,
    zIndex: 2,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  step: {
    fontSize: 14,
    color: '#9B7BC7',
    fontWeight: '900',
    letterSpacing: 2.5,
    marginBottom: 16,
    backgroundColor: '#F0E8FF',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 25,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: '#2F3E20',
    fontWeight: '700',
    lineHeight: 32,
    letterSpacing: 0.5,
    fontFamily: 'Urbanist',
    marginTop: 5,
  },
  titlePurple: {
    color: '#8B5A9F',
  },
  button: {
    position: 'absolute',
    bottom: 140,
    left: '55%',
    marginLeft: -37.5,
    backgroundColor: '#8B5A9F',
    width: 75,
    height: 75,
    borderRadius: 37.5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  arrow: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: '20%',
    color: '#fff',
  },
});