import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Main";
import LayoutContent from "../components/layout/Layout-Content";
import About from "../views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "test",
    components: {Test, content:About}
  },
  {
    path: "/about",
    name: "About",
    components: {content:About}
  },

  {
    path: "/server",
    name: "layout-content",
    components: {content:LayoutContent},
    children:[
      {
        path: "/server/about",
        name: "about",
        component: About
      },
      {
        path: "/server/home",
        name: "home",
        component: Home
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
