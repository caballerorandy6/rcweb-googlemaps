import React from "react";
import { Map, MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import PoiMarkers from "./PoiMarkers";

const MyMap = () => {
  return (
    <Map
      defaultZoom={13}
      defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
      mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
      onCameraChanged={(ev: MapCameraChangedEvent) =>
        console.log(
          "camera changed:",
          ev.detail.center,
          "zoom:",
          ev.detail.zoom
        )
      }
    >
      <PoiMarkers />
    </Map>
  );
};

export default MyMap;
