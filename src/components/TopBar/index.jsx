import {
  AppBar,
  Button,
  IconButton,
  Stack,
  useTheme
} from "@mui/material";

import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from '@mui/icons-material/Menu';

import { useAppState } from "@/state";
import UserMenu from "./UserMenu";
import Message from './Message';
import Search from "./Search";


const Options = ({ state, dispatch }) => {
  return (
    <Stack
      justifyContent="flex-end"
      direction="row"
      className="basis-1/4 text-right"
    >
      <Message unread={state.messages.unread_count} />
      {/* <AboutMe unread={state.messages.unread_count}/> */}
      <IconButton>
        <AddIcon color="action" />
      </IconButton>
      <UserMenu state={state} dispatch={dispatch}/>
    </Stack>
  );
};

const LoginComponent = () => {
  return (
    <Stack
      justifyContent="flex-end"
      direction="row"
      spacing={1}
      className="basis-1/4"
    >
      <Button variant="outlined">登录</Button>
      <Button variant="contained">注册</Button>
    </Stack>
  );
};

const TopBar = (props) => {
  const [state, dispatch] = useAppState();

  const changeMenu = () => {
    dispatch({
      type: 'set drawer'
    })
  }

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Stack direction="row" alignItems="center" className="h-16 py-2 px-6">
        <Stack direction="row" className="basis-1/4" alignItems="center">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={changeMenu}
          >
            <MenuIcon />
          </IconButton>
          logo 清水河畔
        </Stack>
        <Stack direction="row" justifyContent="center" className="basis-1/2">
          <Search />
        </Stack>
        {state.users.uid != 0 ? (
          <Options state={state} dispatch={dispatch} />
        ) : (
          <LoginComponent />
        )}
      </Stack>
    </AppBar>
  );
};

export default TopBar;
