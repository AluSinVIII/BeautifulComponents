
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BeautifulButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default BeautifulButton;
