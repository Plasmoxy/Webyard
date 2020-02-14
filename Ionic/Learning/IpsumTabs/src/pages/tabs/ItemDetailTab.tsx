import { IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router'

const ItemDetailTab: React.FC<RouteComponentProps> = (props) => {

  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonTitle>
          Details
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      yes
    </IonContent>
  </IonPage>
}

export default ItemDetailTab