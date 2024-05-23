import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { home } from "ionicons/icons";
import React from "react";
import { Link } from "react-router-dom";

const DuaGallery: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className="flex items-center justify-start gap-2">
              <Link to="/">
                <IonIcon
                  icon={home}
                  size="large"
                  className="text-neutral-500"
                ></IonIcon>
              </Link>
              Dua Gallery
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">UI goes here...</IonContent>
    </IonPage>
  );
};

export default DuaGallery;
