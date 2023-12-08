import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BeautifulNavBar = ({ title, onBackPress, onMenuPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <Text style={styles.icon}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onMenuPress}>
        <Text style={styles.icon}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    color: 'white',
    fontSize: 16,
  },
});

export default BeautifulNavBar;
