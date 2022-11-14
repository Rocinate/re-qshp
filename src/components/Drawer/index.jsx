import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Box,
  Toolbar,
  Typography,
  Skeleton,
  styled,
  Collapse,
} from "@mui/material";

import MuiDrawer from "@mui/material/Drawer";
import data from "./test";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { useState } from "react";
import { useAppState } from "@/state";
import { theme } from "../../constant";

const Ordinate = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
        <ListItemText primary={data.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.subordinates.map((item) => (
            <ListItemButton sx={{ pl: 4 }} key={item.name}>
              <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

const Sections = () => {
  const toHome = () => {
    console.log("toHome");
  };

  return (
    <>
      {data.length === 0 ? (
        <Typography>加载失败</Typography>
      ) : (
        <List>
          <ListItemButton onClick={toHome}>
            <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
            <ListItemText primary="首页" />
          </ListItemButton>
          {data.map((item) => (
            <Ordinate key={item.name} data={item} />
          ))}
        </List>
      )}
    </>
  );
};

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 0,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const LeftDrawer = () => {
  const [state, dispatch] = useAppState();

  return (
    <Drawer variant="permanent" open={state.drawer} PaperProps={{
        // sx: {
        //     background: theme.
        // }
    }}>
      <Box>
        <Toolbar />
        {/* {loading} */}
        <Sections />
      </Box>
    </Drawer>
  );
};

export default LeftDrawer;
