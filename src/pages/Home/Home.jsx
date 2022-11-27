import {
  Box,
  Typography,
  List,
  Stack,
  Divider,
  Tabs,
  Tab,
  ListItemButton,
  Collapse,
  ListItemText
} from "@mui/material";
import { useAppState } from "@/state";
import { useEffect, useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import WhatshotIcon from "@mui/icons-material/Whatshot";

import moment from "moment";

import Post from "@/components/Post";
import data from "./test";

const BoxHeader = ({ text, Icon }) => {
  return (
    <Box>
      <Stack direction="row" className="p-3">
        <Icon sx={{ mr: 2 }} />
        <Typography>{text}</Typography>
      </Stack>
      <Divider />
    </Box>
  );
};

const menuFontStyle = {fontSize: '1.2rem'}
const ForumGroup = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton className="rounded-lg drop-shadow-md" onClick={handleClick}>
        <ListItemText primary={data.name} primaryTypographyProps={menuFontStyle} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack direction="row">
          {data.subordinates.map((item) => (
            <Box className="w-1/3" key={item.name}>
              <Typography>{item.name}</Typography>
            </Box>
          ))}
        </Stack>
      </Collapse>
    </>
  );
};

function Home() {
  const [state, dispatch] = useAppState();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    console.log(moment().format("LLLL"));
    console.log(moment().valueOf());
  }, []);

  const handleTabClick = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box className="flex">
      <Box className="w-60 mr-6">
        <Box className="rounded-lg drop-shadow-md mb-6">
          <BoxHeader text="论坛统计" Icon={WhatshotIcon} />
          <List></List>
        </Box>
        <Box className="rounded-lg drop-shadow-md mb-6">
          <BoxHeader text="今日热门" Icon={WhatshotIcon} />
          <List></List>
        </Box>
        <Box className="rounded-lg drop-shadow-md">
          <BoxHeader text="热门分类" Icon={WhatshotIcon} />
          <List></List>
        </Box>
      </Box>
      <Box className="flex-1">
        <List>
          {data.map((item, index) => (
            <ForumGroup data={item} key={item.name} />
          ))}
        </List>
      </Box>
    </Box>
  );
}
export default Home;
