import Vue from "vue";
import Router from "vue-router";
import LevelI from "./views/LevelI.vue";
import LevelII from "./views/LevelII.vue";
import LevelIII from "./views/LevelIII.vue";
import LevelIV from "./views/LevelIV.vue";
import LevelV from "./views/LevelV.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: "/Browser-Riddles/",
  routes: [
    {
      path: "/",
      redirect: "/vue"
    },
    {
      path: "/vue",
      name: "LevelI",
      component: LevelI
    },
    {
      path: "/react",
      redirect: "/howManyCircles"
    },
    { path: "/howManyCircles", name: "LevelII", component: LevelII },
    { path: "/12", name: "LevelIII", component: LevelIII },
    { path: "/realDB", name: "LevelIV", component: LevelIV },
    { path: "/graduation", name: "LevelV", component: LevelV },
    {
      path: "*",
      name: "notFound",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
