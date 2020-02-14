import "@ionic/core/css/padding.css"
import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet } from "@ionic/react"
import { cubeOutline, hammerOutline } from "ionicons/icons"
import React, { useMemo } from "react"
import { RouteComponentProps, Route, Redirect } from "react-router"
import { useAppState } from "../App"
import { LIPSUM } from "../stuff"
import AppRootTab from "./AppRootTab"
import { IonReactRouter } from "@ionic/react-router"
import SettingsTab from "./SettingsTab"

const AppPage: React.FC<RouteComponentProps> = (props) => {

  return <IonTabs>
    <IonRouterOutlet>
      <Route path="/app" render={() => <Redirect to="/app/root" />} exact />

      <Route path="/app/root" component={AppRootTab} exact />
      <Route path="/app/settings" component={SettingsTab} exact />
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="root" href="/app/root">
        <IonIcon icon={cubeOutline} />
        <IonLabel>App</IonLabel>
      </IonTabButton>
      <IonTabButton tab="settings" href="/app/settings">
        <IonIcon icon={hammerOutline} />
        <IonLabel>Settings</IonLabel>
      </IonTabButton>
    </IonTabBar>
    
  </IonTabs>
}

export default AppPage