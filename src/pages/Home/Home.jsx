import {
  Box,
  Typography,
  List,
  Stack,
  Divider,
  ListItemButton,
  Collapse,
  Grid,
  ListItemText,
  Avatar,
  ListItem,
} from "@mui/material";
import { useAppState } from "@/state";
import { useEffect, useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useQuery } from "react-query";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

import moment from "moment";

import data from "./test";
import Chip from "@/components/Chip";
import forumBg from "@/assets/login-bg1.jpg";
import UserCard from "@/components/UserCard";
import { getHotThread } from "@/apis/common";

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

const ForumCover = ({ data }) => {
  return (
    <Box
      className="rounded p-4 relative text-white"
      style={{
        backgroundImage: `url(${forumBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box className="absolute bg-black rounded opacity-40 top-0 left-0 h-full w-full"></Box>
      <Box className="relative z-10">
        <Typography>{data.name}</Typography>
        <Stack direction="row" className="mt-4">
          <Stack
            direction="row"
            className=""
            alignItems="center"
            justifyContent="space-between"
          >
            <RemoveRedEyeOutlinedIcon />
            <Typography className="pl-2 text-right">{data.views}</Typography>
          </Stack>
          <Stack
            direction="row"
            className="pl-6"
            alignItems="center"
            justifyContent="space-between"
          >
            <ModeCommentOutlinedIcon />
            <Typography className="pl-2">{data.replies}</Typography>
          </Stack>
          <Stack
            direction="row"
            className="pl-6"
            alignItems="center"
            justifyContent="space-between"
          >
            <ThumbUpAltOutlinedIcon />
            <Typography className="pl-2">{data.support}</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" className="mt-4">
          <Box className="mr-4">
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 40, height: 40 }}
              variant="rounded"
            />
          </Box>
          <Box className="flex-1">
            <Stack direction="row">
              <Chip text={data.name} />
              <Typography>{data.name}</Typography>
            </Stack>
            <Typography>
              19分钟以前 <UserCard data={data} />
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

const menuFontStyle = { fontSize: "1.2rem" };
const ForumGroup = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        className="rounded-lg drop-shadow-md border-b-orange-50 border-b-2"
        onClick={handleClick}
      >
        <ListItemText
          primary={data.name}
          primaryTypographyProps={menuFontStyle}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Box className="h-1 bg-blue-400 rounded-lg"></Box>
      <Collapse in={open} timeout="auto" unmountOnExit className="p-4">
        <Grid container spacing={2}>
          {data.subordinates.map((item, index) => (
            <Grid item xs={4} key={index}>
              <ForumCover data={item} />
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </>
  );
};

function Home() {
  const [state, dispatch] = useAppState();
  const [tabIndex, setTabIndex] = useState(0);
  const { hot, isLoading } = useQuery(
    ["hotThread"],
    () => getHotThread({ forum_id: 0 }),
    {
    //   // catchTime: 60 * 1000,
    //   // staleTime: 30 * 1000
      onSuccess: (data) => {
        // 对板块信息进行处理，得到嵌套的板块关系
        console.log(data)

      }
    }
  );



  useEffect(() => {
    console.log(moment().format("LLLL"));
    console.log(moment().valueOf());
  }, []);

  useEffect(() => {
    console.log(hot)
  }, [isLoading])

  const handleTabClick = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box className="flex">
      <Box className="hidden lg:block w-60 mr-6 ">
        <Box className="rounded-lg drop-shadow-md mb-6">
          <BoxHeader text="论坛统计" Icon={WhatshotIcon} />
          <List></List>
        </Box>
        <Box className="rounded-lg drop-shadow-md mb-6">
          <BoxHeader text="今日热门" Icon={WhatshotIcon} />
          <List>
            {isLoading ? (
              <Typography>none</Typography>
            ) : (
              hot.threads.map((item) => {
                <Post data={item} key={item.tid} />;
              })
            )}
          </List>
        </Box>
        <Box className="rounded-lg drop-shadow-md">
          <BoxHeader text="热门分类" Icon={WhatshotIcon} />
          <List>
            {isLoading ? (
              <Typography>None</Typography>
            ) : (
              hot.forums.map((item) => {
                <ListItem>
                  <ListItemText>{item.name}</ListItemText>
                </ListItem>;
              })
            )}
          </List>
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
