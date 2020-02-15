import React, { useEffect } from "react"
import { FlatList, StatusBar, StyleSheet, View } from "react-native"
import { useImmer } from "use-immer"
import { AppContext, AppState, Todo } from "./AppState"
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import AddTodo from "./components/AddTodo"

export default function App() {
  const [appS, updateAppS] = useImmer(new AppState())
  
  useEffect(() => {
    console.log("startup effect")
  }, [])

  return (
    <AppContext.Provider value={[appS, updateAppS]}>
      <View style={ss.container}>
        <StatusBar backgroundColor="coral" barStyle="dark-content" />
        <Header />
        <View style={ss.content}>
          <AddTodo />
          <FlatList
            data={appS.todos}
            renderItem={({ item }) => <TodoItem item={item} />}
          />
        </View>
      </View>
    </AppContext.Provider>
  )
}

const ss = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },

  content: {
    flex: 1,
    margin: 16
  },

  tx: { color: "white", fontWeight: "bold" }
})
