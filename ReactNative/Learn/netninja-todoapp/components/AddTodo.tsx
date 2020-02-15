import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native'
import { AppContext, Todo } from '../AppState'

export default function AddTodo() {

  const [text, setText] = useState("")

  const changeHandler = (t: string) => {
    setText(t)
  }

  return <View>
    <TextInput style={ss.input}
      placeholder="new todo"
      onChangeText={changeHandler}
    />
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