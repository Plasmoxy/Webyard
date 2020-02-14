import "@ionic/core/css/padding.css"
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react"
import { cubeOutline, hammerOutline } from "ionicons/icons"
import React from "react"
import { Redirect, Route, RouteComponentProps } from "react-router"
import AppRootTab from "./tabs/AppRootTab"
import ItemDetailTab from "./tabs/ItemDetailTab"
import SettingsTab from "./tabs/SettingsTab"

const AppPage: React.FC<RouteComponentProps> = (props) => {

  return <IonTabs>
    <IonRouterOutlet>
      <Route path="/app" render={() => <Redirect to="/app/root" />} exact />

      <Route path="/app/root" component={AppRootTab} exact />
      <Route path="/app/settings" component={SettingsTab} exact />

      <Route path="/app/settings/itemDetail/:id" component={ItemDetailTab} exact />
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