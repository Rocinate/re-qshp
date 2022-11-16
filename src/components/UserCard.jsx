import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Grid,
  Menu
} from "@mui/material";
import PopupState, { bindHover, bindMenu } from "material-ui-popup-state";
import avatarBg from "@/assets/avatar-bg.jpg";
import HoverMenu from 'material-ui-popup-state/HoverMenu'
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
              <Card>
                <CardHeader>
                  {/* <img src={avatarBg} alt="avatar" height={200}/> */}
                  <Typography>123421</Typography>
                </CardHeader>
                <CardContent>
                  <Grid container spacing={0}>
                    <Grid item md={4}></Grid>
                    <Grid item md={4}></Grid>
                    <Grid item md={4}></Grid>
                    <Grid item md={4}></Grid>
                    <Grid item md={4}></Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button size="small">Zone</Button>
                </CardActions>
              </Card>
            </HoverMenu>
          </Box>
        )}
      </PopupState>
    </>
  );
};

export default UserCard;
