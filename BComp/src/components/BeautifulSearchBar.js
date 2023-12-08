// BeautifulComponents/BeautifulSearchBar.js

import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BeautifulSearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 5,
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default BeautifulSearchBar;
