import Home from "@/pages/Home/Home";
import NotFound from '@/pages/ErrorPage/NotFound'
import Section from "@/pages/Section/Section";

const routes = [
    {
      path: "/",
      component: Home
    },
    {
      path: '/home',
      component: Home,
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
      path: '/section/:section',
      component: Section,
    },
    {
      path: '*',
      component: NotFound
    }
  ];

export default routes;