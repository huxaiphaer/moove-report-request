import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import RequestReport from "../views/request-report/Index"

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: RequestReport
        }
    ]
})
