import { IonButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRadio, IonTitle, IonToggle, IonToolbar, IonBackButton } from "@ionic/react"
import { hammerOutline, moon, moonOutline } from "ionicons/icons"
import React, { useMemo, useState } from "react"
import { cssIsDarkThemeEnabled, cssSetDarkTheme } from "../DarkTheme"
import "./SettingsTab.css"

const SettingsTab: React.FC = () => {

  const [isDark, setDark] = useState(cssIsDarkThemeEnabled())

  function darkModeCheckbox(checc: boolean) {
    console.log("darkmode -> " + checc)
    cssSetDarkTheme(checc)
    setDark(checc)
  }

  return useMemo(() => <IonPage>
      {console.log("render Settings")}

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
            <IonIcon icon={isDark ? moon : moonOutline} slot="start" color={isDark ? "warning" : ""}></IonIcon>
            <IonLabel>Dark mode</IonLabel>
            <IonCheckbox slot="end" checked={isDark} onIonChange={(e: any) => darkModeCheckbox(e.target.checked)}/>
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
  </IonPage>, [isDark])
}

export default SettingsTab
