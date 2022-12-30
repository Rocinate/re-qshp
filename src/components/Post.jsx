import { Box, Typography, Avatar, Stack } from "@mui/material";
import UserCard from "./UserCard";
import moment from "moment";
import Chip from "./Chip";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

const Post = ({ data, small, className}) => {
  return (
    <Box className={small ? className : `${className} p-6`}>
      <Stack direction="row">
        <Box sx={{ mr: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={small ? { width: 35, height: 35 } : { width: 54, height: 54 }}
            variant="rounded"
          />
        </Box>
        <Box className="flex-1">
          <Stack justifyContent="space-between">
            <Stack direction="row">
              <Box><Chip small={small} text="等级" />{data.subject}</Box>
            </Stack>
            <Stack direction="row">
              <UserCard data={data} />
              <Typography variant="subtitle2" className="pl-1">
                {`· ${moment(data.publish_time * 1000).calendar()}`}
              </Typography>
            </Stack>
            {small ? (
              <></>
            ) : (
              <Stack>
                <Typography variant="subtitle2">{data.subject}</Typography>
              </Stack>
            )}
          </Stack>
        </Box>
        {small ? (
          <></>
        ) : (
          <Box>
            <Stack direction="row">
              <Stack
                direction="row"
                className="w-1/3"
                alignItems="center"
                justifyContent="space-between"
              >
                <RemoveRedEyeOutlinedIcon />
                <Typography className="pl-2 text-right">
                  {data.views}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                className="w-1/3 pl-6"
                alignItems="center"
                justifyContent="space-between"
              >
                <ModeCommentOutlinedIcon />
                <Typography className="pl-2">{data.replies}</Typography>
              </Stack>
              <Stack
                direction="row"
                className="w-1/3 pl-6"
                alignItems="center"
                justifyContent="space-between"
              >
                <ThumbUpAltOutlinedIcon />
                <Typography className="pl-2">{data.support}</Typography>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Box>
                <Typography className="pr-10">{`最新回复:`}</Typography>
              </Box>
              <Box>
                <Typography>
                  {moment(data.last_reply_time * 1000).calendar()}
                </Typography>
              </Box>
            </Stack>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Post;
