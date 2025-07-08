// src/screens/FontTestScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import FONTS from '../constants/fonts';

const FontTestScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Font Test Screen</Text>
        
        <Text style={styles.defaultFont}>Default Font: This is the default system font</Text>
        
        <Text style={styles.jakartaFont}>Jakarta Font: This is using PlusJakartaSans-Regular</Text>
        
        <Text style={styles.songbirdFont}>Songbird Font: This should be using the Songbird font</Text>
        
        <Text style={styles.songbirdFont2}>Songbird Alt: Testing different font name</Text>
        
        <Text style={styles.songbirdLarge}>Songbird Large: This is Songbird font in larger size</Text>
        
        <Text style={styles.songbirdStyled}>Songbird Styled: Colored Songbird font</Text>
        
        <Text style={styles.jakartaBold}>Jakarta Bold: Using Jakarta Sans Bold</Text>
        
        <Text style={styles.jakartaItalic}>Jakarta Italic: Using Jakarta Sans Italic</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  defaultFont: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  jakartaFont: {
    fontFamily: FONTS.JAKARTA_REGULAR,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  songbirdFont: {
    fontFamily: FONTS.SONGBIRD,
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  songbirdFont2: {
    fontFamily: 'songbird',
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  songbirdLarge: {
    fontFamily: FONTS.SONGBIRD,
    fontSize: 28,
    marginBottom: 20,
    color: '#333',
  },
  songbirdStyled: {
    fontFamily: FONTS.SONGBIRD,
    fontSize: 24,
    marginBottom: 20,
    color: '#2E5452',
    textAlign: 'center',
  },
  jakartaBold: {
    fontFamily: FONTS.JAKARTA_BOLD,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  jakartaItalic: {
    fontFamily: FONTS.JAKARTA_ITALIC,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
});

export default FontTestScreen;
