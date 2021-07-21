import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Board from "../views/Board.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/board/:id",
    name: "Board",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Board
  },
];

const router = new VueRouter({
  routes,
});

export default router;
