import "@ionic/core/css/padding.css"
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react"
import React from "react"
import { RouteComponentProps } from "react-router"

const OtherPage: React.FC<RouteComponentProps> = (props) => {
  return <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonTitle>Other</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      yis welcom to other !!!
    </IonContent>
  </>
}

export default OtherPage