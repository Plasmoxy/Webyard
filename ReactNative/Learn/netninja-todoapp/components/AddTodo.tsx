import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Button } from 'react-native'
import { AppContext, Todo } from '../AppState'

export default function AddTodo() {

  const [appS, updateAppS] = useContext(AppContext)!!
  const [text, setText] = useState("")

  const addHandler = () => {
    updateAppS(s => {
      s.todos.push(new Todo(text))
    })
    setText("")
  }

  return <View>
    <TextInput style={ss.input}
      placeholder="new todo"
      onChangeText={s => setText(s)}
      value={text}
      onSubmitEditing={addHandler}
    />
    <Button onPress={addHandler} title="Add todo" color="coral" />
  </View>
}

const ss = StyleSheet.create({
  input: {
    color: 'white',
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})