import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type AppState = {
  count: number
  name: string
  password: string
  memesRead: number
}

export const appReducerInit: AppState = {
  count: 0,
  name: "",
  password: "",
  memesRead: 0
}

const appSlice = createSlice({
  name: "app",
  initialState: appReducerInit, //automatic type infer to rest of the slice

  reducers: {
    // automaticky vytvorí reducery a akcie z funkcií, pričom knižnica Immer zkonvertuje mutabilné operácie so stavom (state) na imutabilné operácie (pre Redux)
    increment(state, action: PayloadAction<{ amount: number }>) {
      const { amount } = action.payload
      state.count += amount ?? 1 // mutabilná operácia kópie stavu
      // ?? = elvis operator
    },

    decrement(state, action: PayloadAction<{ amount: number }>) {
      const { amount } = action.payload
      state.count -= amount ?? 1
    },

    setCredentials(
      state,
      action: PayloadAction<{
        name: string
        password: string
      }>
    ) {
      const { name, password } = action.payload
      state.name = name
      state.password = password
    },

    increaseMemesRead(s, a) {
      s.memesRead++
    }
  }
})

export const {
  increment,
  decrement,
  setCredentials,
  increaseMemesRead
} = appSlice.actions
// hocikde v appke potom: dispatch(increment({amount: 30}))

// reducer
export default appSlice.reducer
