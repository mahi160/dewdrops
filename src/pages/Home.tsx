import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";

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

        <div className="grid grid-cols-2 gap-2 p-2 mt-4">
          <Link to="/fast-track">
            <IonButton
              expand="full"
              shape="round"
              size="large"
              color={"danger"}
            >
              Fast Track
            </IonButton>
          </Link>
          <Link to="/dua-gallery">
            <IonButton expand="full" shape="round" size="large">
              Dua Gallery
            </IonButton>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
