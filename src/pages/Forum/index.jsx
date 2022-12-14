import { Box, Typography, List, Stack, Divider, Tabs, Tab } from "@mui/material";
import { useAppState } from "@/state";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import WhatshotIcon from "@mui/icons-material/Whatshot";

import moment from 'moment'

// import { getThreadList } from '@/apis/common'
import Post from '@/components/Post'
import data from './test'

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

function Forum() {
  const [state, dispatch] = useAppState();
  const [tabIndex, setTabIndex] = useState(0)
  const routeParam = useParams()
  // const {data: threadList, isLoading} = useQuery(['getThread', () => getThreadList({forum_id: routeParam.fid})])

  useEffect(() => {
    console.log(moment().format('LLLL'))
    console.log(moment().valueOf())
    // console.log(routeParam)
  }, [])

  const handleTabClick = (event, newValue) => {
    setTabIndex(newValue)
  }

  return (
    <Box className="flex">
      <Box className="w-60 mr-6">
        <Box className="bg-white rounded-lg drop-shadow-md mb-6">
          <BoxHeader text="今日热门" Icon={WhatshotIcon} />
          <List></List>
        </Box>
      </Box>
      <Box className="flex-1">
        <Box className="bg-white rounded-lg drop-shadow-md">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabIndex} onChange={handleTabClick} aria-label="basic tabs">
            <Tab label="最新发表" />
            <Tab label="最新回复" />
            <Tab label="精华展示" />
          </Tabs>
        </Box>
          <List>
            {data.data.map((item) => (
              <Post data={item} key={item.id}/>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
export default Forum;
