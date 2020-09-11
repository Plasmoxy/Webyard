import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import './SettingsTab.css'
import AppToolbar from '../components/AppToolbar'

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <AppToolbar />
      </IonHeader>
      <IonContent>
        yes
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
