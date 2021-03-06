import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import vuetify from "./plugins/vuetify";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  created() {
    document.addEventListener("beforeunload", this.handler);
  },
  methods: {
    handler: async function handler() {
      await window.onewallet.forgetIdentity();
      store.state = {};
    }
  },
  render: h => h(App)
}).$mount("#app");
