import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Add this import

const { height } = Dimensions.get('window');

const Onboarding2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Background Image - 60% of screen */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/onboarding/w2.png')}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        
        {/* Page indicators overlaid on image */}
        <View style={styles.pageIndicators}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* Content Container - 40% of screen with rounded top */}
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.step}>STEP 1</Text>
          <Text style={styles.title}>
            Personalize Your Mental{'\n'}
            <Text style={styles.titleGreen}>Health State</Text> With AI
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Onboarding3')}>
  <Text style={styles.arrow}>→</Text>
</TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F0D5',
  },
  imageContainer: {
    height: height * 0.7,
    width: '100%',
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
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
    borderTopLeftRadius: 115,
    borderTopRightRadius: 125,
    borderBottomLeftRadius: 550,
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
    color: '#8B9A7A',
    fontWeight: '900',
    letterSpacing: 2.5,
    marginBottom: 16,
    backgroundColor: '#E8F4E0',
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
  titleGreen: {
    color: '#7A9B57',
  },
  button: {
    position: 'absolute',
    bottom: 140,
    left: '55%',
    marginLeft: -37.5, // Half of button width to center it
    backgroundColor: '#4A5F2A',
    width: 70,
    height: 70,
    borderRadius: 37.5,
    justifyContent: 'flex-start',
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
  // marginTop: "5%",
  color: '#fff',
}
});