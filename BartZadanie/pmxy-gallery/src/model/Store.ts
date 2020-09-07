import create from 'zustand'
import { combine } from 'zustand/middleware'
import produce from 'immer'

export const defaultStore = {
  count: 0
}

export const useStore = create(combine(defaultStore, (set, get) => ({
  modify: (fn: any) => set(produce(fn)),
  
  increment: () => set(s => ({ count: s.count + 1 })),
  decrement: () => set(s => ({ count: s.count - 1 })),
})))