import "@ionic/core/css/padding.css"
import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet } from "@ionic/react"
import { cubeOutline, hammerOutline } from "ionicons/icons"
import React, { useMemo } from "react"
import { RouteComponentProps, Route, Redirect } from "react-router"
import { useAppState } from "../App"
import { LIPSUM } from "../stuff"
import AppTab from "./AppTab"
import { IonReactRouter } from "@ionic/react-router"
import SettingsTab from "./SettingsTab"

const AppPage: React.FC<RouteComponentProps> = (props) => {

  return <IonPage>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          
          <Route path="/app/:tab(appTab)" component={AppTab} exact={true} />
          <Route path="/app/:tab(settingsTab)" component={SettingsTab} exact={true} />
          
          <Route path="/app" render={() => <Redirect to="/app/appTab" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="appTab" href="/app/appTab">
            <IonIcon icon={cubeOutline} />
            <IonLabel>App</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settingsTab" href="/app/settingsTab">
            <IonIcon icon={hammerOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonPage>
}

export default AppPage