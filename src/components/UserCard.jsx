import {
  Typography,
  Stack
} from "@mui/material";
import Chip from './Chip'
import PopupState, { bindHover, bindMenu } from "material-ui-popup-state";
import avatarBg from "../assets/avatar-bg.jpg";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import { Box } from "@mui/system";

const UserCard = ({ data }) => {
  return (
    <>
      <PopupState variant="popover">
        {(popupState) => (
          <Box {...bindHover(popupState)}>
            <Typography
              variant="subtitle2"
              className="underline underline-offset-2"
            >
              {data.author}
            </Typography>
            <HoverMenu {...bindMenu(popupState)}>
              <Box style={{ width: "35rem" }}>
                <Box style={{ backgroundImage: `url(${avatarBg})` }}>
                  <Stack direction="row">
                    <Box className="p-5">
                      <img
                        src="https://mui.com/static/images/avatar/1.jpg"
                        className="rounded"
                        height="80"
                        width="80"
                      />
                    </Box>
                    <Box className="p-5 text-white">
                      <Typography>{data.author}</Typography>
                      <Box className="flex"><Chip text={data.author}/></Box>
                      <Typography>这个人太懒了，什么都没有写</Typography>
                    </Box>
                  </Stack>
                </Box>
                <Box className="flex">
                  <Box className="w-1/4 p-4 text-center"><Typography>水滴</Typography><Typography>{1}</Typography></Box>
                  <Box className="w-1/4 p-4 text-center"><Typography>精华</Typography><Typography>{1}</Typography></Box>
                  <Box className="w-1/4 p-4 text-center"><Typography>发帖</Typography><Typography>{1}</Typography></Box>
                  <Box className="w-1/4 p-4 text-center"><Typography>威望</Typography><Typography>{1}</Typography></Box>
                </Box>
              </Box>
            </HoverMenu>
          </Box>
        )}
      </PopupState>
    </>
  );
};

export default UserCard;
