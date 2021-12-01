import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

global.JQuery = require('jquery');
const $ = global.JQuery;
window.$ = $;

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faHome} from "@fortawesome/free-solid-svg-icons";

library.add(faHome);

createApp(App)
    .use(store)
    .use(router)
    .component('font-awesome-icons', FontAwesomeIcon)
    .mount("#app");
