import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Vuelidate from "vuelidate";
import vuetify from './plugins/vuetify';
import axios from './plugins/axios'
import VueAxios from 'vue-axios'

Vue.component('vue-ctk-date-time-picker', window['vue-ctk-date-time-picker']);
Vue.use(Vuelidate);
Vue.use(VueAxios, axios)

new Vue({
    render: h => h(App),
    router,
    vuetify,
}).$mount('#app')
