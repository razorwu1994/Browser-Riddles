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
import Morse from "./views/todo/Morse.vue";
import Loader from "./views/todo/Loader.vue";
import SVGS from "./views/todo/SVGS.vue";
import Solar from "./views/todo/Solar.vue";
import LevelXI from "./views/LevelXI.vue";
import CyberPunk from "./views/todo/CyberPunk.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: "/Browser-Riddles/",
  routes: [
    {
      path: "/cyber-punk",
      name: "Cyberpunk",
      component: CyberPunk,
    },
    {
      path: "/morse-dev",
      name: "Morse",
      component: Morse,
    },
    {
      path: "/svgs-dev",
      name: "SVGS",
      component: SVGS,
    },
    {
      path: "/loader-dev",
      name: "Loader",
      component: Loader,
    },
    {
      path: "/solar-dev",
      name: "Solar",
      component: Solar,
    },
    {
      path: "/",
      redirect: "/intro",
    },
    {
      path: "/intro",
      name: "Intro",
      component: Intro,
    },
    {
      path: "/competitor",
      name: "LevelI",
      component: LevelI,
    },
    {
      path: "/react",
      redirect: "/howManyEllipses",
    },
    {
      path: "/angular",
      redirect: "/howManyEllipses",
    },
    { path: "/howManyEllipses", name: "LevelII", component: LevelII },
    { path: "/12", name: "LevelIII", component: LevelIII },
    { path: "/sync", redirect: "/internet" },
    { path: "/async", redirect: "/internet" },
    { path: "/synchronous", redirect: "/internet" },
    { path: "/asynchronous", redirect: "/internet" },
    { path: "/promise", redirect: "/internet" },
    { path: "/internet", name: "LevelIV", component: LevelIV },

    { path: "/realDB", name: "LevelV", component: LevelV },
    { path: "/masbarcode", name: "LevelVI", component: LevelVI },
    { path: "/avacado", name: "LevelVII", component: LevelVII },
    { path: "/florida", name: "LevelVIII", component: LevelVIII },
    { path: "/polydactylCat", redirect: "/bamboozle" },
    { path: "/bamboozle", name: "LevelIX", component: LevelIX },
    { path: "/giveBackMyGeneral", redirect: "/welcomeToBWorld" },
    { path: "/welcomeToBWorld", name: "LevelX", component: LevelX },
    { path: "/spiderman", name: "LevelXI", component: LevelXI },
    { path: "/ceiling", name: "Ceiling", component: Ceiling },

    // { path: "/new", name: "Solar", component: Solar },
    {
      path: "/aintnowayout",
      name: "nowayout",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Lock.vue"),
    },
    {
      path: "*",
      name: "deadEnd",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/DeadEnd.vue"),
    },
    {
      path: "/todo",
      name: "Todolist",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ToDo.vue"),
    },
  ],
});
