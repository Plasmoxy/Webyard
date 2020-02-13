import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonTitle,
  IonToggle,
  IonToolbar
} from "@ionic/react"
import { hammerOutline } from "ionicons/icons"
import React from "react"
import "./SettingsTab.css"

const SettingsTab: React.FC = () => {
  return (
    <IonPage>
      {console.log("Render Settings")}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon slot="icon-only" icon={hammerOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="none">
          <IonItem>
            <IonLabel>Dark theme</IonLabel>
            <IonCheckbox slot="end" />
          </IonItem>
        </IonList>

        <IonItemDivider />

        {/*-- List of Text Items --*/}
        <IonList lines="none">
          <IonItem>
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mega Man X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Super Mario World</IonLabel>
          </IonItem>
        </IonList>

        <IonItemDivider />

        {/*-- List of Input Items --*/}
        <IonList lines="none">
          <IonItem>
            <IonLabel>Input: </IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Toggle</IonLabel>
            <IonToggle slot="end"></IonToggle>
          </IonItem>
          <IonItem>
            <IonLabel>Radio</IonLabel>
            <IonRadio slot="end"></IonRadio>
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
        </IonList>

        {/*-- List of Sliding Items --*/}
        <IonList lines="none">
          <IonItemSliding>
            <IonItem>
              <IonLabel>Item slide</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => {}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default SettingsTab
