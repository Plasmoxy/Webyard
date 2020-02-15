import React, { useEffect } from "react"
import { FlatList, StatusBar, StyleSheet, View, AppState, AppStateStatus, Button } from "react-native"
import { useImmer } from "use-immer"
import { Todo, RootState, RootContext } from "./RootState"
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import AddTodo from "./components/AddTodo"
import { AsyncStorage } from 'react-native'

export default function App() {

  const [state, updateState] = useImmer(new RootState())

  const clearState = async () => {
    await AsyncStorage.removeItem("state")
    updateState(s => new RootState())
  }

  // app state change bind, generates new function on each render
  // captures new state
  const appStateChange = async (astate: AppStateStatus) => {
    console.log("app state -> " + astate)
    if (astate == "background" || astate == "inactive") {
      try {
        await AsyncStorage.setItem("state", JSON.stringify(state))
        console.log("Saved state to AsyncStorage")
      } catch(e) {
        console.log("ERROR saving state to AsyncStorage: " + e)
      }
    }
  }

  // startup effect
  useEffect(() => {
    console.log(">> Startup effect, recovering state")
    async function startup() {
      try {
        const rootStateJson = await AsyncStorage.getItem("state")
        if (rootStateJson) {
          const newState = JSON.parse(rootStateJson) as RootState
          updateState(s => newState)
          console.log("Recovered state from AsyncStorage")
        } else {
          console.log("No saved state in AsyncStorage")
        }
      } catch(e) {
        console.log("ERROR when recovering root state: " + e)
      }
    }
    startup()
  }, [])
  
  // bind state change effect
  useEffect(() => {
    AppState.addEventListener("change", appStateChange)
    return () => AppState.removeEventListener("change", appStateChange)
  })

  // render
  return (
    <RootContext.Provider value={[state, updateState]}>
      <View style={ss.container}>
        <StatusBar backgroundColor="coral" barStyle="dark-content" />
        <Header />
        <View style={ss.content}>
          <AddTodo />
          <FlatList
            data={state.todos}
            renderItem={({ item }) => <TodoItem item={item} />}
          />
          <Button onPress={clearState} title="Clear State" />
        </View>
      </View>
    </RootContext.Provider>
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
