import create from 'zustand'
import { combine, devtools } from 'zustand/middleware'
import produce from 'immer'

export const defaultStore = {
  count: 0
}

export const useStore = create(devtools(combine(defaultStore, (set, get, api) => ({
  set: (recipe: (state: typeof defaultStore) => void) => set(ss => produce(ss, recipe)),
  
  increment: () => set(s => ({ count: s.count + 1 })),
  decrement: () => set(s => ({ count: s.count - 1 })),
}))))