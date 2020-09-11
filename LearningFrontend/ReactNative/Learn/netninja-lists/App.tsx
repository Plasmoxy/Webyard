import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {useImmer} from 'use-immer'

class Person {
  static idCount=0
  public id=String(Person.idCount++)

  constructor(
    public name: string,
    public age: number,
  ){}
}

export default function App() {

  const [people, updatePeople] = useImmer<Person[]>(new Array(30).fill(null).map(x => new Person("Seb", 18)))

  const onItemClick = item => {
    updatePeople(p => p.filter(psn => psn.id != item.id))
  }

  return (
    <View style={styles.container}>
      <Text>yesds</Text>
      <FlatList
        numColumns={2}
        keyExtractor={x => x.id}
        data={people}
        renderItem={({item})=> (
          <TouchableOpacity onPress={() => onItemClick(item)}>
            <Text style={styles.item}>{item.name} {item.age} id={item.id}</Text>
          </TouchableOpacity>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 33,
  },

  item: {
    padding: 20,
    backgroundColor: "pink",
    margin: 3,
    borderRadius: 10
  }
});
