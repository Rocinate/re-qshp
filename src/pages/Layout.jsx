import { Routes, Route, useLocation } from "react-router-dom";

import { Box, Toolbar } from "@mui/material";
import TopBar from "@/components/TopBar";
import Drawer from "@/components/Drawer";
import routes from "@/route";
import Announcement from '@/components/Announcement'

const Layout = () => {
  useEff

  return (
    <>
      <Box className="relative h-full flex">
        <TopBar />
        <Drawer />
        <Box component="main" className="w-full h-full flex flex-col align-middle items-center">
          <Toolbar />
          <Box className="p-3 w-full max-w-screen-xl flex-1">
            <Announcement />
            <Routes>
              {routes.map(({ path, component: Component }) => (
                <Route path={path} element={<Component />} key={path} />
              ))}
            </Routes>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
