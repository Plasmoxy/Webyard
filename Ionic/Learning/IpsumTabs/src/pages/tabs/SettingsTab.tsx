import { IonButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRadio, IonTitle, IonToast, IonToggle, IonToolbar } from "@ionic/react"
import { hammerOutline, moon, moonOutline } from "ionicons/icons"
import React, { PropsWithChildren, useMemo, useState } from "react"
import { cssIsDarkThemeEnabled, cssSetDarkTheme } from "../../DarkTheme"
import "./SettingsTab.css"

const SettingsRoutedTextItem = (p: PropsWithChildren<{id: string}>) => <IonItem routerLink={`/app/settings/itemDetail/${p.id}`}>
{p.children}
</IonItem>

const SettingsTab: React.FC = () => {

  const [isDark, setDark] = useState(cssIsDarkThemeEnabled())
  const [showToastSlide, setShowToastSlide] = useState(false)

  function darkModeCheckbox(checc: boolean) {
    cssSetDarkTheme(checc)
    setDark(checc)
  }

  return useMemo(() => <IonPage>

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
          <SettingsRoutedTextItem id="napoje">
            <IonLabel>Napoje</IonLabel>
          </SettingsRoutedTextItem>
          <SettingsRoutedTextItem id="koberce">
            <IonLabel>Koberce</IonLabel>
          </SettingsRoutedTextItem>
          <SettingsRoutedTextItem id="vydavky">
            <IonLabel>Vydavky</IonLabel>
          </SettingsRoutedTextItem>
          <SettingsRoutedTextItem id="vyskumy">
            <IonLabel>Vyskumy</IonLabel>
          </SettingsRoutedTextItem>
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
              <IonItemOption onClick={() => setShowToastSlide(true)}>Show</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          
        </IonList>

        <IonToast
          color="primary"
          isOpen={showToastSlide}
          onDidDismiss={() => setShowToastSlide(false)}
          message="Opened item by slide"
          duration={1000} />

      </IonContent>
  </IonPage>, [isDark, showToastSlide])
}

export default SettingsTab
