import Vue from "vue";
// import router from './router'
// import store from './store'
// import vuetify from './plugins/vuetify'
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
