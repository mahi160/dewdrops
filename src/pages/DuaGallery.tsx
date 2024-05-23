import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import AppHeader from "../components/AppHeader";

const DuaGallery: React.FC = () => {
  const pins = Array.from({ length: 2 }, (_, i) => i + 1);
  const all = Array.from({ length: 57 }, (_, i) => i + 1);
  return (
    <IonPage>
      <AppHeader heading="Dua Gallery" />
      <IonContent className="ion-padding">
        <div className="grid gap-8">
          <section>
            <h1 className="mb-4 text-2xl">Pinned Images</h1>
            <div
              className="grid items-start justify-start overflow-auto gap-x-2 gap-y-4 max-h-96"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(120px,1fr))",
              }}
            >
              {pins.map((n) => (
                <div key={n}>
                  <img
                    className="rounded aspect-square"
                    src={`https://picsum.photos/id/${n}/200/300`}
                    alt={"" + n}
                  />
                  <p className="mt-1 italic text-center text-neutral-500">
                    {n}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h1 className="mb-4 text-2xl">All Images</h1>
            <div
              className="grid items-start justify-start overflow-auto gap-x-2 gap-y-4 max-h-[calc(100vh-220px)] mb-4"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(60px,1fr))",
              }}
            >
              {all.map((n) => (
                <div key={n}>
                  <img
                    className="rounded aspect-square"
                    src={`https://picsum.photos/id/${n}/200/300`}
                    alt={"" + n}
                  />
                  <p className="mt-1 text-xs italic text-center text-neutral-500">
                    {n}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DuaGallery;
