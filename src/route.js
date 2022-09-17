

import About from "@/pages/About";
import Home from "@/pages/Home";
import Login from "@/pages/Login/Login";
import Main from "@/pages/Main";
import NotFound from '@/pages/NotFound'

const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/main",
      component: Main,
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