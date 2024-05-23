import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import { add, home, remove } from "ionicons/icons";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FastTrack: React.FC = () => {
  const [missedFast, setMissedFast] = useState(
    Number(localStorage.getItem("missedFast") || "0")
  );
  const [showInput, setShowInput] = useState(false);
  const [resetValue, setResetValue] = useState(0);

  const trackFastByOne = (type: "inc" | "dec") => {
    if (type === "inc") {
      setMissedFast((prev) => prev + 1);
    } else {
      setMissedFast((prev) => prev - 1);
    }
  };
  useEffect(() => {
    localStorage.setItem("missedFast", JSON.stringify(missedFast));
  }, [missedFast]);

  const handleReset = (type: "add" | "set") => {
    if (type === "add") {
      setMissedFast((prev) => prev + resetValue);
    } else {
      setMissedFast(resetValue);
    }
    setShowInput(false);
    setResetValue(0);
  };
  return (
    <>
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
                Qada Fast Track
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <header
            className={
              "flex flex-col items-center justify-center gap-4 " +
              (showInput && "grayscale")
            }
          >
            <p className="text-neutral-500">Total Qada fast remaining</p>
            <h1 className="font-mono text-blue-500 text-9xl">{missedFast}</h1>
          </header>

          <div
            className={
              "flex items-center justify-center gap-8 p-4 mt-6 " +
              (showInput && "grayscale")
            }
          >
            <IonButton
              shape="round"
              onClick={() => trackFastByOne("inc")}
              fill="outline"
              color="danger"
              size="large"
              className="w-24 h-24 text-3xl"
            >
              <IonIcon slot="icon-only" icon={add}></IonIcon>
            </IonButton>
            <IonButton
              shape="round"
              onClick={() => trackFastByOne("dec")}
              fill="outline"
              color="success"
              size="large"
              className="w-24 h-24 text-3xl"
              disabled={missedFast <= 0}
              id="open-toast"
            >
              <IonIcon slot="icon-only" icon={remove}></IonIcon>
            </IonButton>
          </div>
          <div className="flex flex-col items-center justify-center">
            {!showInput && (
              <IonButton
                fill="clear"
                color={"tertiary"}
                onClick={() => setShowInput((p) => !p)}
                size="small"
              >
                Reset Count
              </IonButton>
            )}

            {showInput && (
              <Fragment>
                <IonInput
                  className="w-40 mb-2 text-3xl text-center"
                  type="number"
                  onIonInput={(e) =>
                    setResetValue(Number(e.target.value || "0"))
                  }
                  placeholder="0"
                  autoFocus={true}
                ></IonInput>
                <div className="flex items-center justify-center">
                  <IonButton
                    size="small"
                    shape="round"
                    fill="clear"
                    onClick={() => handleReset("add")}
                  >
                    Add
                  </IonButton>
                  <IonButton
                    size="small"
                    shape="round"
                    fill="clear"
                    color={"danger"}
                    onClick={() => handleReset("set")}
                  >
                    Set
                  </IonButton>
                  <IonButton
                    size="small"
                    shape="round"
                    fill="clear"
                    color={"success"}
                    onClick={() => {
                      setShowInput(false);
                      setResetValue(0);
                    }}
                  >
                    Cancel
                  </IonButton>
                </div>
              </Fragment>
            )}
          </div>

          <IonList className="mt-10">
            <IonListHeader>
              <IonLabel>Some notes on qada fast</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis, magni!
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis, magni!
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis, magni!
              </IonLabel>
            </IonItem>
          </IonList>

          <IonToast
            trigger="open-toast"
            message="ALHAMDULILLAH ٱلْحَمْدُ لِلَّٰهِ"
            duration={5000}
            swipeGesture="vertical"
            className="text-center"
            position="bottom"
          ></IonToast>
        </IonContent>
      </IonPage>
    </>
  );
};

export default FastTrack;
