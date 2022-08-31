import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

const options = {
    customVariables: ["~/assets/variables.scss"],
    theme: {
        options: { customProperties: true },
      dark: false,
      themes: {
        light: {
          primary: "#0033AA",
          secondary: "#FFFFFF",
          accent: "#8c9eff",
          error: "#FF0000",
        },
        dark: {
          primary: "#84DCCE",
        },
      },
      error: "#FF0000",
    },
    icons: {
      iconfont: "mdi", // default - only for display purposes
    },
    font: {
      family: "Montserrat",
      fontDisplay:"block",
      google: {
        families: ["Quicksand:500", "Roboto Mono:400"]
      },
    },
  };

export default new Vuetify(options);
