import React, { useContext, useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { RootContext, Todo } from '../RootState'

export default function AddTodo() {

  const [state, updateState] = useContext(RootContext)!!
  const [text, setText] = useState("")

  const addHandler = () => {
    if (text == "") return
    updateState(s => {
      s.todos.push(new Todo(text, state.countId))
      s.countId++
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
    <Button onPress={addHandler} title="Add todo" color="#4643df" />
  </View>
}

const ss = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderColor: "#2effd5",
    borderWidth: 1,
    color: "white",
  }
})