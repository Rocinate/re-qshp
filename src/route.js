

import About from "@/pages/About/About";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import NotFound from '@/pages/ErrorPage/NotFound'

const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/about",
      component: About,
    },
    // {
    //   path: "/edit",
    //   component: Edit,
    // },
    // {
    //   path: "/article",
    //   component: Article,
    // },
    {
      path: '*',
      component: NotFound
    }
  ];

export default routes;