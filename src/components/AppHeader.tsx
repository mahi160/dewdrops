import { IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { home } from "ionicons/icons";
import React from "react";
import { Link } from "react-router-dom";

const AppHeader: React.FC<{ heading: string }> = ({ heading }) => {
  return (
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
            {heading}
          </div>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppHeader;
