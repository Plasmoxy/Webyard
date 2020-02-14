import { IonReactRouter } from "@ionic/react-router"
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"
import "@ionic/react/css/display.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/float-elements.css"
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/typography.css"
import React, { createContext, useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { useImmer } from "use-immer"
/* Global CSS */
import "./global.css"
import AppPage from "./pages/AppPage"
import OtherPage from "./pages/OtherPage"
/* Theme variables */
import "./theme/variables.css"
import { IonApp } from "@ionic/react"

export class AppState {
  userName = "Sebu"
  userAge = 18
}

export type AppContextHook = [
  AppState,
  (f: (draft: AppState) => void | AppState) => void
]
const AppContext = createContext<AppContextHook | null>(null)
export const useAppState = () => useContext(AppContext)!!

const App = (p: { initState: AppState }) => {
  const appStateHook = useImmer<AppState>(p.initState)

  return (
    <AppContext.Provider value={appStateHook}>
      <IonApp>
        <IonReactRouter>
          <Route path="/" render={() => <Redirect to="/app" />} exact />

          <Route path="/other" component={OtherPage} />
          <Route path="/app" component={AppPage} />
        </IonReactRouter>
      </IonApp>
    </AppContext.Provider>
  )
}

export default App
