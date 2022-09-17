import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemButton,
  Avatar,
  Typography,
  Box
} from "@mui/material";

const UserList = (props) => {
  const { data, chooseUser } = props;

  const handleClick = (user) => {
    chooseUser(user)
  }

  return (
    <>
      <Box className="mx-auto border-b border-b-slate-300">
        <Typography gutterBottom variant="h5" align="center">
          选择用户
        </Typography>
        {/* <Typography className="float-right">成电人的聚集地</Typography> */}
      </Box>
      <Box>
        <List sx={{ width: "100%" }}>
          {data.map((user) => (
            <ListItem alignItems="flex-start" key={user}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt="avatar"
                    src="https://mui.com/static/images/avatar/3.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>12312</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default UserList;
