import { IonButtons, IonLabel, IonTitle, IonToggle, IonToolbar } from "@ionic/react"
import React from 'react'


const AppToolbar: React.FC = () => <IonToolbar>
  <IonTitle>App</IonTitle>
  <IonButtons className="ion-margin-end" slot="end">
    <IonLabel>Dark</IonLabel>
    <IonToggle />
  </IonButtons>
</IonToolbar>

export default AppToolbar