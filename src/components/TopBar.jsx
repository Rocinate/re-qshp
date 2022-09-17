import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import AddIcon from '@mui/icons-material/Add';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const TopBar = () => {
  return (
    <AppBar position="static" color="transparent" className="h-16">
      <div className="flex flex-row py-2 px-8">
        <div className="basis-1/4">LOGO</div>
        <div className="basis-1/2">
            search
        </div>
        <div className="basis-1/4 text-right">
          <Button variant="outlined m-4">登录</Button>
          <Button variant="contained">注册</Button>
        </div>
        <div className="basis-1/4 text-right">
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
        </div>
      </div>
    </AppBar>
  );
};

export default TopBar;
