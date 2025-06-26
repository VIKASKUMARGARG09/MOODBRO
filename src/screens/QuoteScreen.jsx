import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuoteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>
        freud
        <Text style={styles.dot}>.ai</Text>
      </Text>
      <Text style={styles.quote}>
        "In the midst of winter, I found there was within me an invincible summer."
      </Text>
      <Text style={styles.author}>— Albert Camus</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  brand: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 32,
  },
  dot: {
    fontWeight: '300',
    color: '#AAAAAA',
  },
  quote: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#E0E0E0',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 28,
  },
  author: {
    fontSize: 16,
    color: '#888',
  },
});

export default QuoteScreen;