import "@ionic/core/css/padding.css"
import {
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonText
} from "@ionic/react"
import React from "react"
import AppToolbar from "../components/AppToolbar"
import { LIPSUM } from "../stuff"
import "./AppTab.css"

const AppTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <AppToolbar />
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonText color="dark">{LIPSUM}</IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default AppTab
