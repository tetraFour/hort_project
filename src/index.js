import "./assets/styles/styles.sass";

import Vue from "vue";
import { ContentLoader } from "./mixins/contentLoader";

const app = new Vue({
  el: "#app",
  data: {
    msg: "hello"
  },
  mixins: [ContentLoader]
});
