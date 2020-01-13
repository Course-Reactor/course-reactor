export default [
  {
    path: "/",
    component: "page-home",
    action: () => import(/* webpackChunkName: "page-home" */ "../pages/home")
  },
  {
    path: "(.*)",
    component: "page-404",
    action: () => import(/*webpackChunkName: "page-404" */ "../pages/404")
  }
];
