import { IonContent, IonHeader, IonPage } from '@ionic/react'
import React from 'react'
import AppToolbar from '../components/AppToolbar'
import './SettingsTab.css'

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
