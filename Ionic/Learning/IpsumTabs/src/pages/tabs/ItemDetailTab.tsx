import { IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { RouteComponentProps } from 'react-router'

const ItemDetailTab: React.FC<RouteComponentProps> = (props) => {

  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonBackButton>

        </IonBackButton>
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