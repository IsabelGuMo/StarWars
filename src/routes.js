import Home from "./views/Home.vue";
import Films from "./views/Films.vue";
import NotFound from "./views/NotFound.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/films/:id", name: "films", component: Films, props: true },
  { path: "/:path(.*)", component: NotFound },
];
