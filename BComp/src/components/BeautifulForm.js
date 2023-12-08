import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const BeautifulForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, email });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Submit" onPress={handleSubmit} color="#3498db" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default BeautifulForm;
