import VueI18n from 'vue-i18n'
import VueDateFns from "vue-date-fns";
import Vuelidate from "vuelidate";
import VueRouter from 'vue-router';
import Vuetify from 'vuetify'
import axios from '@/plugins/axios'
import VueAxios from 'vue-axios'
import { createLocalVue } from '@vue/test-utils'
import vuetify from '@/plugins/vuetify';

const localVue = createLocalVue()
localVue.use(VueI18n)
localVue.use(Vuetify)
localVue.use(VueAxios, axios)
localVue.use(Vuex)
localVue.use(VueDateFns)
localVue.use(VueRouter);
localVue.use(Vuelidate);
let router = new VueRouter()

module.exports = { localVue, router, store, i18n, vuetify, firebase }
