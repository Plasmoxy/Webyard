import React, { useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default App = (props) => {

  const [count, setCount] = useState(0)

  return <View style={styles.container}>
    <Text style={styles.center} size="32">{count}</Text>
    <Button style={styles.m} title="+" onPress={() => setCount(count+1)} />
    <Button style={styles.m} title="-" onPress={() => setCount(count-1)} />
  </View>
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 18,
    marginTop: 18
  },
  m: {
    margin: 5
  },
  center: {
    alignItems: "center"
  }
});
