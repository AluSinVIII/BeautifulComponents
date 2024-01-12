
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const GradientButton = ({ onPress, children, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundGradient: {
      colors: ['#3498db', '#1abc9c'],
      start: { x: 0, y: 0.5 },
      end: { x: 1, y: 0.5 },
    },
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GradientButton;
