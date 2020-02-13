import "@ionic/core/css/padding.css"
import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { cubeOutline } from "ionicons/icons"
import React, { useMemo, ReactPropTypes } from "react"
import { useAppState } from "../App"
import { LIPSUM } from "../stuff"
import "./AppTab.css"
import { RouteComponentProps } from "react-router"

const AppTab: React.FC<RouteComponentProps> = (props) => {

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
        <IonCard>
          <IonCardContent>
            <IonText color="primary">
              username: {appState.userName}<br />
              user age: {appState.userAge} <br />
            </IonText>
            <IonText color="dark">{LIPSUM}</IonText>
          </IonCardContent>
        </IonCard>
        <IonButton onClick={() => btnYeetClicked()}>yeet</IonButton>
      </IonContent>
  </IonPage>, [])
}

export default AppTab
