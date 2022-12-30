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
import { Link } from "react-router-dom";

import Chip from "@/components/Chip";
import forumBg from "@/assets/login-bg1.jpg";
import UserCard from "@/components/UserCard";
import { getHotThread, getBBSInfo } from "@/apis/common";
import Post from "@/components/Post";

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
        <Typography>
          <Link to={`/forum/${data.fid}`}>{data.name}</Link>
        </Typography>
        <Stack direction="row" className="mt-4">
          <Stack
            direction="row"
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
            <Typography className="pl-2">{data.favtimes}</Typography>
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
              <Link to={`/thread/${data.tid}`}>
                <Box className="line-clamp-1">
                  <Chip text={data.name} />
                  {data.subject}
                </Box>
              </Link>
            </Stack>
            <Box>
              {moment(data.dateline * 1000).calendar()} <UserCard data={data} />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

const menuFontStyle = { fontSize: "1.2rem" };
const ForumGroup = ({ data }) => {
  const [open, setOpen] = useState(true);

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
          {data.forums.map((item, index) => (
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
  const { data: hot, isLoading } = useQuery(["hotThread"], () =>
    getHotThread({ forum_id: 0 })
  );

  const { data: info, isLoading: infoLoading } = useQuery(["bbsInfo"], () =>
    getBBSInfo()
  );

  return (
    <Box className="flex">
      <Box className="flex-1">
        <List>
          {state.navList.map((item, index) => (
            <ForumGroup data={item} key={item.name} />
          ))}
        </List>
      </Box>
      <Box className="hidden lg:block w-60 ml-6 ">
        <Box className="rounded-lg drop-shadow-md mb-6">
          <BoxHeader text="论坛统计" Icon={WhatshotIcon} />
          <Box className="p-3">
            <Typography>
              今日：{infoLoading ? <></> : info.todayposts}
            </Typography>
            <Typography>
              昨日：{infoLoading ? <></> : info.yesterdayposts}
            </Typography>
          </Box>
        </Box>
        <Box className="rounded-lg drop-shadow-md">
          <BoxHeader text="热门分类" Icon={WhatshotIcon} />
          <Box className="p-3">
            {infoLoading ? (
              <Typography>None</Typography>
            ) : (
              info.forums.map((item) => (
                <Typography key={item.name}>
                  <Link to={`/forum/${item.fid}`}>{item.name}</Link>
                </Typography>
              ))
            )}
          </Box>
        </Box>
        <Box className="rounded-lg drop-shadow-md mb-6">
          <BoxHeader text="今日热门" Icon={WhatshotIcon} />
          <List>
            {isLoading ? (
              <Typography>none</Typography>
            ) : (
              // hot.threads.length
              hot.threads.map((item) => (
                <Post small data={item} key={item.tid} className="mb-4" />
              ))
            )}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
export default Home;
