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
import React, { createContext, useState, Dispatch } from "react"
import { Redirect, Route } from "react-router-dom"
/* Global CSS */
import "./global.css"
import AppTab from "./pages/AppTab"
import SettingsTab from "./pages/SettingsTab"
/* Theme variables */
import "./theme/variables.css"

export type AppState = {
  darkMode: boolean
}

export const AppContext = createContext<Partial<[AppState, Dispatch<AppState>]>>([])

const App = (p: {initState: AppState}) => {

  const appStateHook = useState(p.initState)

  return <AppContext.Provider value={appStateHook}>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
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
