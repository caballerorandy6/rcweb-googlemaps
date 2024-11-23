import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      "process.env.GOOGLE_MAPS_API_KEY": JSON.stringify(
        env.VITE_GOOGLE_MAPS_API_KEY
      ),
      "process.env.GOOGLE_MAPS_MAP_ID": JSON.stringify(
        env.VITE_GOOGLE_MAPS_MAP_ID
      ),
    },
    resolve: {
      alias: {
        "@vis.gl/react-google-maps/examples.js":
          "https://visgl.github.io/react-google-maps/scripts/examples.js",
      },
    },
  };
});
