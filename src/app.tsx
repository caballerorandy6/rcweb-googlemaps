import React from "react";
import { createRoot } from "react-dom/client";
import { APIProvider } from "@vis.gl/react-google-maps";
import MyMap from "./components/MyMap";

const App = () => (
  <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
    <MyMap />
  </APIProvider>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);

export default App;
