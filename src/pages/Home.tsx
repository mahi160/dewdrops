import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dewdrops</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dewdrops</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRouterOutlet></IonRouterOutlet>
      </IonContent>
    </IonPage>
  );
};

export default Home;
