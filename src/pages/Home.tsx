import {
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

        <div className="grid grid-cols-2 gap-4 p-4 mt-4">
          <Link to="/fast-track">
            <button className="w-full p-4 rounded shadow bg-rose-100 text-rose-700">
              Fast Track
            </button>
          </Link>
          <Link to="/dua-gallery">
            <button className="w-full p-4 rounded shadow bg-emerald-100 text-emerald-700">
              Dua Gallery
            </button>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
