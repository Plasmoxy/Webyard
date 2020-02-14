import "@ionic/core/css/padding.css"
import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, IonBackButton } from "@ionic/react"
import { cubeOutline, hammerOutline } from "ionicons/icons"
import React, { useMemo } from "react"
import { RouteComponentProps, Route, Redirect } from "react-router"
import { useAppState } from "../App"
import { LIPSUM } from "../stuff"
import AppTab from "./AppTab"
import { IonReactRouter } from "@ionic/react-router"

const OtherPage: React.FC<RouteComponentProps> = (props) => {
  console.log("Otherpage -> " + props.match.url)
  return <IonPage>
    <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Other</IonTitle>
        </IonToolbar>
      </IonHeader>
  </IonPage>
}

export default OtherPage