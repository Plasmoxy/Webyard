import { immerable, Draft } from "immer"
import { createContext } from "react"

export class RootState {
  [immerable] = true
  countId = 0
  todos: Todo[] = []
}

export class Todo {
  constructor(
    public text: string,
    public id: number
  ){}
  
  key = String(this.id)
}

type ImmerHook<T> = [T, (f: (d: Draft<T>) => T | void) => void]
export const RootContext = createContext<ImmerHook<RootState>|null>(null)