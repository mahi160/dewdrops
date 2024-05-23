import {
  IonButton,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonModal,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";

const FastTrack: React.FC = () => {
  const [daysWithDate, setDaysWithDate] = useState<string[]>(
    JSON.parse(localStorage.getItem("dwd") || "[]")
  );
  const [daysWithoutDate, setDaysWithoutDate] = useState<number>(
    JSON.parse(localStorage.getItem("dwod") || "0")
  );

  const [missedFast, setMissedFast] = useState(
    daysWithDate.length + daysWithoutDate
  );
  const [addDays, setAddDays] = useState(0);
  const [inputType, setInputType] = useState("by-input");

  const handleTodayFast = () => {
    setMissedFast((prev) => prev - 1);
    if (daysWithoutDate > 0) {
      setDaysWithoutDate((prev) => prev - 1);
    } else {
      setDaysWithDate((prev) => prev.slice(1));
    }
  };

  const handleNoDate = (type: "add" | "set") => {
    if (!addDays) return;
    if (type === "add") {
      setDaysWithoutDate((prev) => prev + addDays);
    } else {
      setDaysWithoutDate(addDays);
    }
  };

  const handleDateRange = (e: any) => {
    const data = e.target.value;
    console.log(data);

    if (!data) return;
    if (typeof data === "string") {
      setDaysWithDate((prev) => [data]);
    } else {
      setDaysWithDate((prev) => [...data]);
    }
  };

  useEffect(() => {
    setMissedFast(daysWithDate.length + daysWithoutDate);
  }, [daysWithDate, daysWithoutDate]);

  useEffect(() => {
    localStorage.setItem("dwd", JSON.stringify(daysWithDate));
  }, [daysWithDate]);

  useEffect(() => {
    localStorage.setItem("dwod", JSON.stringify(daysWithoutDate));
  }, [daysWithoutDate]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fast Track</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>No of Fast missed: {missedFast}</h1>
        <p>
          No of days without dates: {daysWithoutDate}
          <br />
          No of days with dates: {daysWithDate.length}
        </p>
        <IonButton disabled={missedFast === 0} onClick={handleTodayFast}>
          I did one today!
        </IonButton>

        <IonList>
          <IonItem>
            <IonSelect
              label="Input Type"
              labelPlacement="fixed"
              placeholder="How you want to select?"
              onIonChange={(e) => setInputType(e.detail.value)}
              value={inputType}
            >
              <IonSelectOption value="by-input">By Input</IonSelectOption>
              <IonSelectOption value="by-range">By Date</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        <IonList style={{ marginTop: "4px" }}>
          {inputType === "by-input" && (
            <IonItem>
              <IonInput
                placeholder="no of days"
                type="number"
                onIonInput={(e) => setAddDays(Number(e.target.value || "0"))}
              ></IonInput>

              <IonButton
                onClick={() => handleNoDate("add")}
                style={buttonStyle}
              >
                Add
              </IonButton>
              <IonButton
                onClick={() => handleNoDate("set")}
                color="danger"
                style={buttonStyle}
                fill="outline"
              >
                Set
              </IonButton>
            </IonItem>
          )}
          {inputType === "by-range" && (
            <IonItem>
              <IonDatetimeButton datetime="start"></IonDatetimeButton>

              <IonModal keepContentsMounted={true}>
                <IonDatetime
                  id="start"
                  presentation="date"
                  multiple={true}
                  showDefaultTitle={true}
                  showDefaultButtons={true}
                  doneText="Add :("
                  value={daysWithDate}
                  onBlur={handleDateRange}
                ></IonDatetime>
              </IonModal>
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const buttonStyle = {
  width: "120px",
  height: "32px",
};
export default FastTrack;
