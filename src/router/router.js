import LoginPost from "@/views/login/LoginPost.vue";
// import HomeViews from "@/views/HomeViews.vue";
import LayoutViews from "@/layout/Index.vue";
import BaseA from "@/views/Base/BaseA.vue";
import BaseB from "@/views/Base/BaseB.vue";
import BaseC from "@/views/Base/BaseC.vue";
import BaseD from "@/views/Base/BaseD.vue";

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
        path: "/based",
        component: BaseD,
        children: [
          {
            path: "/basea",
            component: BaseA,
          },
          {
            path: "/baseb",
            component: BaseB,
          },
          {
            path: "/basec",
            component: BaseC,
          },
        ],
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
