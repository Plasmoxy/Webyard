import "@ionic/core/css/padding.css"
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonText } from "@ionic/react"
import React from "react"
import "./AppTab.css"
import { LIPSUM } from "../stuff"
import AppToolbar from "../components/AppToolbar"

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <AppToolbar />
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonText color="dark">
              {LIPSUM}
            </IonText>
          </IonCardContent> 
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default Tab1
