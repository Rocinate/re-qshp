import {
  AppBar,
  Button,
  IconButton,
  Badge,
  Stack
} from "@mui/material";

import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import AddIcon from "@mui/icons-material/Add";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SettingsIcon from "@mui/icons-material/Settings";

import Search from "./Search";

const TopBar = (props) => {
  return (
    <AppBar position="static" color="transparent">
      <Stack direction="row" alignItems="center" className="h-16 py-2 px-8">
        <Stack direction="row" className="basis-1/4">
          logo 清水河畔
        </Stack>
        <Stack direction="row" justifyContent="center" className="basis-1/2">
          <Search />
        </Stack>
        <Stack
          justifyContent="flex-end"
          direction="row"
          spacing={1}
          className="basis-1/4"
        >
          <Button variant="outlined">登录</Button>
          <Button variant="contained">注册</Button>
        </Stack>
        <Stack
          justifyContent="flex-end"
          direction="row"
          className="basis-1/4 text-right"
        >
          <IconButton>
            <Badge badgeContent={5} color="primary">
              <MarkunreadOutlinedIcon color="action" />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={5} color="primary">
              <AlternateEmailIcon color="action" />
            </Badge>
          </IconButton>
          <IconButton>
            <AddIcon color="action" />
          </IconButton>
        </Stack>
        <IconButton>
          <SettingsIcon color="action" />
        </IconButton>
      </Stack>
    </AppBar>
  );
};

export default TopBar;
