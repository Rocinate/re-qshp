import { Routes, Route, useLocation } from "react-router-dom";

import { Box, Toolbar } from "@mui/material";
import TopBar from "@/components/TopBar";
import Drawer from "@/components/Drawer";
import routes from "@/route";

const Layout = () => {
  return (
    <>
      {/* <Box className="relative" style={{ height: "calc(100% - 4rem)" }}> */}
      <Box className="relative h-full flex">
        <TopBar />
        <Drawer />
        <Box component="main" className="w-full h-full flex flex-col align-middle items-center">
          <Toolbar />
          <Box className="p-3 w-full max-w-screen-xl flex-1">
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
