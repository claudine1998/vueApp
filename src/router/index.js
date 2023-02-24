/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("../components/UserList")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial",
      component: () => import("../components/Users")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../components/AddUsers")
    }
  ]
});
