import React, { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  
  return useMemo(() => <View style={ss.header}>
    {console.log("header rend")}
    <Text style={ss.title}>Todos</Text>
  </View>, [])
}

const ss = StyleSheet.create({
  header: {
    height: 50,
    paddingTop: 10,
    backgroundColor: '#0068d6'
  },
  title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  },
})