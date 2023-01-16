import React from "react";
import { YMaps, Map } from "react-yandex-maps";

const mapStyle = {
  position: "relative",
  left: 0,
  top: 0,
  width: "100%",
  height: "416px",
  maxWidth: "var(--width)",
  padding: "var(--padding)",
  margin: "auto",
  marginBottom: "48px",
  overflow: "hidden",
};

const Yandex = ({ center }) => {
  return (
    <YMaps
      query={{
        apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b",
        lang: "en_US",
      }}
    >
      <Map
        style={mapStyle}
        defaultState={{ center: center || [41.311081, 69.240562], zoom: 11 }}
      >
        {/* <Placemark geometry={{coordinates:center}} /> */}
      </Map>
    </YMaps>
  );
};

export default Yandex;
