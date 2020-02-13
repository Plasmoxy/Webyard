import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';

type Person = {
  name: string
  age: number
}

const PersonRenderItem = ({item}: {item: Person}) => <View>
  <Text>Person({item.name}, {item.age})</Text>
</View>

export default function App() {

  const [list, setList] = useState<Person[]>([])

  return <View>
    <StatusBar backgroundColor="blue" barStyle="dark-content" />
    <Text>Open up App.asdt working sdasddd yoursd app!</Text>
    <FlatList data={list} renderItem={PersonRenderItem} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
