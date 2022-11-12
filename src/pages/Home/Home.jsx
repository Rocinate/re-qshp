import { Box, Typography, List, Stack, Divider, Tabs, Tab } from "@mui/material";
import { useAppState } from "@/state";
import { useEffect } from "react";

import Broadcast from "@/components/Broadcast";
import Announcement from "@/components/Announcement";
import WhatshotIcon from "@mui/icons-material/Whatshot";

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

function Home() {
  const [state, dispatch] = useAppState();

  return (
    <Box className="flex">
      <Box className="w-60 mr-6">
        <Box className="bg-white rounded-lg drop-shadow-md mb-6">
          <BoxHeader text="今日热门" Icon={WhatshotIcon} />
          <List></List>
        </Box>
        <Box className="bg-white rounded-lg drop-shadow-md">
          <BoxHeader text="热门分类" Icon={WhatshotIcon} />
          <List></List>
        </Box>
      </Box>
      <Box className="flex-1">
        <Box className="bg-white rounded-lg drop-shadow-md">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
          {/* <Divider /> */}
          <List></List>
        </Box>
      </Box>
      {/* <Announcement /> */}
    </Box>
  );
}
export default Home;
