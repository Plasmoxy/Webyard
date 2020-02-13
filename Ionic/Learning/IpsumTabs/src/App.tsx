import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
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
import { cubeOutline, hammerOutline } from "ionicons/icons"
import React, { createContext, useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { useImmer } from 'use-immer'
/* Global CSS */
import "./global.css"
import AppTab from "./pages/AppTab"
import SettingsTab from "./pages/SettingsTab"
/* Theme variables */
import "./theme/variables.css"

export class AppState {
  userName = "Sebu"
  userAge = 18
}

export type AppContextHook = [AppState, (f: (draft: AppState) => void | AppState) => void]

const AppContext = createContext<Partial<AppContextHook>>([])
export const useAppState = () => useContext(AppContext) as AppContextHook

const App = (p: {initState: AppState}) => {

  const appStateHook = useImmer<AppState>(p.initState)

  return <AppContext.Provider value={appStateHook}>
    <IonApp>
      {console.log("render App root")}
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet >
            <Route path="/app" component={AppTab} exact={true} />
            <Route path="/settings" component={SettingsTab} exact={true} />
            <Route path="/" render={() => <Redirect to="/app" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="app" href="/app">
              <IonIcon icon={cubeOutline} />
              <IonLabel>App</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon icon={hammerOutline} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </AppContext.Provider>
}

export default App
