import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AppContext, Todo } from '../AppState'

export default function TodoItem(p: {item: Todo}) {

  const [appS, updateAppS] = useContext(AppContext)!!

  const removeItem = () => {
    updateAppS(s => {
      s.todos.splice(s.todos.indexOf(p.item), 1)
    })
  }

  return <TouchableOpacity onPress={removeItem}>
    <Text style={ss.item}>{p.item.text}</Text>
  </TouchableOpacity>
}

const ss = StyleSheet.create({
  item: {
    color: "white",
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10
  }
})