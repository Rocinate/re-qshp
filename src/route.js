import Home from "@/pages/Home/Home";
import NotFound from '@/pages/ErrorPage/NotFound'
import Forum from "@/pages/Forum";
import Thread from '@/pages/Thread';

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
      path: '/forum/:fid',
      component: Forum,
    },
    {
      path: '/thread/:tid',
      component: Thread
    },
    {
      path: '*',
      component: NotFound
    }
  ];

export default routes;