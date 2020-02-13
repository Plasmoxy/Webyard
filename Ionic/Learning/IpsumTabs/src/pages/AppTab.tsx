import "@ionic/core/css/padding.css"
import {
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon
} from "@ionic/react"
import React from "react"
import { LIPSUM } from "../stuff"
import "./AppTab.css"
import { cubeOutline } from "ionicons/icons"

const AppTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
              <IonButton>
                <IonIcon slot="icon-only" icon={cubeOutline} />
              </IonButton>
            </IonButtons>
          <IonTitle>IpsumTabs</IonTitle>
        </IonToolbar>
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
