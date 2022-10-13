import Home from "@/pages/Home/Home";
import NotFound from '@/pages/ErrorPage/NotFound'

const routes = [
    {
      path: "/",
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
      path: '*',
      component: NotFound
    }
  ];

export default routes;