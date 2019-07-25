import Vue from "vue";
import Router from "vue-router";
import LevelI from "./views/LevelI.vue";
import LevelII from "./views/LevelII.vue";
import LevelIII from "./views/LevelIII.vue";
import LevelIV from "./views/LevelIV.vue";
import LevelV from "./views/LevelV.vue";
import LevelVI from "./views/LevelVI.vue";
import LevelVII from "./views/LevelVII.vue";
import LevelVIII from "./views/LevelVIII.vue";
import LevelIX from "./views/LevelIX.vue";
import Ceiling from "./views/Ceiling.vue";
import LevelX from "./views/LevelX.vue";
import Intro from "./views/Intro.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: "/Browser-Riddles/",
  routes: [
    {
      path: "/",
      redirect: "/intro"
    },
    {
      path: "/intro",
      name: "Intro",
      component: Intro
    },
    {
      path: "/competitor",
      name: "LevelI",
      component: LevelI
    },
    {
      path: "/react",
      redirect: "/howManyEllipses"
    },
    {
      path: "/angular",
      redirect: "/howManyEllipses"
    },
    { path: "/howManyEllipses", name: "LevelII", component: LevelII },
    { path: "/12", name: "LevelIII", component: LevelIII },
    { path: "/async", name: "LevelIV", component: LevelIV },
    { path: "/realDB", name: "LevelV", component: LevelV },
    { path: "/x87|6.5", name: "LevelVI", component: LevelVI },
    { path: "/avacado", name: "LevelVII", component: LevelVII },
    { path: "/florida", name: "LevelVIII", component: LevelVIII },
    { path: "/polydactylCat", redirect: "/bamboozle" },
    { path: "/bamboozle", name: "LevelIX", component: LevelIX },
    { path: "/giveBackMyGeneral", name: "LevelX", component: LevelX },

    // { path: "/new", name: "Solar", component: Solar },
    {
      path: "/aintnowayout",
      name: "nowayout",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Lock.vue")
    },
    {
      path: "*",
      name: "deadEnd",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/DeadEnd.vue")
    },
    {
      path: "/todo",
      name: "Todolist",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ToDo.vue")
    }
  ]
});
