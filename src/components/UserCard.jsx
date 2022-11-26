import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Grid,
  Stack,
  Menu,
} from "@mui/material";
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
              <Box style={{ width: "50rem" }}>
                <Box style={{ backgroundImage: `url(${avatarBg})` }}>
                  {/* <img  */}
                  <Stack direction="row">
                    <Box className="p-5">
                      <img
                        src="https://mui.com/static/images/avatar/1.jpg"
                        height="80"
                        width="80"
                      />
                    </Box>
                    <Box className="p-5">
                      <Typography>123421</Typography>
                      <Typography>在线时间</Typography>
                    </Box>
                  </Stack>
                </Box>
                <Box>
                  <Grid container spacing={0}>
                    <Grid item md={3}>
                      水滴
                    </Grid>
                    <Grid item md={3}>
                      精华
                    </Grid>
                    <Grid item md={3}>
                      发帖
                    </Grid>
                    <Grid item md={3}>
                      威望
                    </Grid>
                  </Grid>
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
