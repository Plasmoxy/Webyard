import "@ionic/core/css/padding.css"
import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { cubeOutline } from "ionicons/icons"
import React, { useMemo, ReactPropTypes } from "react"
import { useAppState } from "../App"
import { LIPSUM } from "../stuff"
import "./AppTab.css"

const AppTab: React.FC = (props) => {

  const [appState, updateAppState] = useAppState()

  function btnYeetClicked() {
    console.log("Yeet")
    
  }

  return useMemo(() => <IonPage>
      {console.log("render AppTab")}
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
        darkMode: {}<br />
        <IonButton onClick={() => btnYeetClicked()}>yeet</IonButton>
        <IonCard>
          <IonCardContent>
            <IonText color="dark">{LIPSUM}</IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
  </IonPage>, [])
}

export default AppTab
