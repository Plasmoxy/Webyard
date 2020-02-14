import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('Seb')

  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput style={styles.input} onChangeText={t => setName(t)} />
      <Text>name: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 10,
    padding: 8,
    margin: 10,
    width: 200,
  },
});
