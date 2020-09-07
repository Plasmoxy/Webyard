import create from 'zustand'
import { combine } from 'zustand/middleware'
import produce from 'immer'

export const defaultStore = {
  count: 0
}

export const useStore = create(combine(defaultStore, (set, get) => ({
  set: (fn: (state: typeof defaultStore) => void) => set(ss => produce(ss, fn)),
  
  increment: () => set(s => ({ count: s.count + 1 })),
  decrement: () => set(s => ({ count: s.count - 1 })),
})))