import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  
  return <View style={ss.header}>
    <Text style={ss.title}>Todos</Text>
  </View>
}

const ss = StyleSheet.create({
  header: {
    height: 50,
    paddingTop: 10,
    backgroundColor: 'coral'
  },
  title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  },
})