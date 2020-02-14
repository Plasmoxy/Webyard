import { immerable, Draft } from "immer"
import { createContext } from "react"

export class AppState {
  [immerable] = true
  todos: Todo[] = []
}

export class Todo {
  static countId = 0
  key = String(Todo.countId++)

  constructor(
    public text: string
  ){}
}

type ImmerHook<T> = [T, (f: (d: Draft<T>) => T | void) => void]
export const AppContext = createContext<ImmerHook<AppState>|null>(null)