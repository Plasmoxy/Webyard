import React, { useEffect, useState, useRef, Ref, MutableRefObject } from "react"
import { FlatList, StatusBar, StyleSheet, View, AppState, AppStateStatus, Button, Platform } from "react-native"
import { useImmer } from "use-immer"
import { Todo, RootState, RootContext } from "./RootState"
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import AddTodo from "./components/AddTodo"
import { AsyncStorage } from 'react-native'
import _ from 'lodash'
import Toast from 'react-native-easy-toast'

export async function saveRootState(state: RootState) {
  try {
    await AsyncStorage.setItem("state", JSON.stringify(state))
    console.log("Continous save: " + JSON.stringify(state))
  } catch(e) {
    console.log("Error during saving state.")
  }
}

// if there is a single second of state not being updated, save it to storage
const debouncedStateSave = _.debounce(async (state: RootState, tsr: MutableRefObject<Toast>) => {
  await saveRootState(state)
  console.log("Saved continous state.")
  tsr.current.show("Saved")
}, 1000)

export default function App() {

  const toastRef = useRef<Toast>()
  const [state, updateState] = useImmer(new RootState())

  const clearStateHandle = async () => {
    updateState(s => new RootState())
  }

  // app state change bind, generates new function on each render
  // captures new state
  const appStateChangeHandle = async (astate: AppStateStatus) => {
    console.log("app state -> " + astate)
    if (astate == "background" || astate == "inactive") {
      debouncedStateSave(state, toastRef)
    }
  }

  // startup effect
  useEffect(() => {
    async function startup() {
      console.log(">> Startup effect, recovering state")
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
        console.log("ERROR when recovering saved state: " + e)
      }
    }
    startup()
  }, [])

  // continous saving effect, goes async
  useEffect(() => {
    debouncedStateSave(state, toastRef)
  }, [state])
  
  // app state change binding effect
  useEffect(() => {
    AppState.addEventListener("change", appStateChangeHandle)
    return () => AppState.removeEventListener("change", appStateChangeHandle)
  })

  // render
  return (
    <RootContext.Provider value={[state, updateState]}>
      <View style={ss.container}>

        <StatusBar backgroundColor="coral" barStyle="dark-content" />

        {/*
        // @ts-ignore*/}
        <Toast ref={toastRef} style={{backgroundColor: 'red'}} />

        <Header />
        <View style={ss.content}>
          <AddTodo />
          <FlatList
            data={state.todos}
            renderItem={({ item }) => <TodoItem item={item} />}
          />
          <Button onPress={clearStateHandle} title="Clear State" />
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
