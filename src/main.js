import {createApp} from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import hljs from "highlight.js";
import "highlight.js/styles/color-brewer.css";
import YQUI from '../packages/index.js'

import router from "../src/router/index.js";
import './styles/style.scss'
const app = createApp(App)
app.use(YQUI)
app.use(router);
app.use(createPinia());
hljs.configure({
  ignoreUnescapedHTML: true,
  languages: [
    "javascript",
    "css",
    "python",
    "html",
    "bash",
    "java",
    "sql",
    "json",
    "http",
    "go",
    "c++",
    "c#",
    "",
  ],
});
app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
app.mount('#app')
