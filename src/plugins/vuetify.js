import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import ko from "vuetify/lib/locale/ko"

import "@/styles/_font.css";
import "@/styles/svg.sass";
import "@/assets/scss/blue-builder.scss";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#64748b",
        secondary: "#4e94e9",
        accent: "#f78b1e",
        error: "#f26161",
      },
    },
  },
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
  lang: {
    locales: { ko },
    current: 'ko'
  }
});
