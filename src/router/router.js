import LoginPost from "@/views/login/LoginPost.vue";
import HomeViews from "@/views/HomeViews.vue";
import LayoutViews from "@/layout/Index.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    component: LayoutViews,
    children: [
      {
        path: "/home",
        component: HomeViews,
      },
    ],
  },
  {
    path: "/login",
    component: LoginPost,
  },
  // {
  //   path: "/layout",
  //   component: LayoutViews,
  // },

];

export default routes;
