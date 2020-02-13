import {
  IonContent,
  IonHeader,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonRadio,
  IonToggle,
  IonCheckbox,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from "@ionic/react"
import React from "react"
import AppToolbar from "../components/AppToolbar"
import "./SettingsTab.css"

const SettingsTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <AppToolbar />
      </IonHeader>
      <IonContent>
        {/*-- List of Text Items --*/}
        <IonList>
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

        {/*-- List of Input Items --*/}
        <IonList>
          <IonItem>
            <IonLabel>Input</IonLabel>
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
        <IonList>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => {}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
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
