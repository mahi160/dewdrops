import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import React from "react";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Dewdrops</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            {/* <IonCardSubtitle>Awesome Subtitle</IonCardSubtitle> */}
            <IonCardTitle>Welcome!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent></IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
