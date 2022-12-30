import { Box, Typography, Stack, Skeleton } from "@mui/material";
import { useQuery } from "react-query";
import { getBulletin } from "@/apis/common";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SwiperContent = ({ data }) => {
  return (
    <SwiperSlide>
      <Box>{data.title}</Box>
    </SwiperSlide>
  );
};

const Announcement = () => {
  const { data, isLoading } = useQuery(["bulletinList"], () => getBulletin());

  return (
    <Stack direction="row" className="bg-white drop-shadow-md mb-6">
      <Box className="bg-blue-400 flex items-center p-4">
        <Typography className="text-white text-lg font-bold">公告</Typography>
      </Box>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="min-h-20 p-6 pb-8"
      >
        {isLoading ? (
          <SwiperSlide className="h-full">
            <Skeleton variant="rectangular" width={500} />
          </SwiperSlide>
        ) : (
          data.map((item, index) => (
            <SwiperSlide className="h-full" key={item.tid}>
              <Typography className="line-clamp-3">{item.subject}{item.subject}{item.subject}{item.subject}{item.subject}{item.subject}{item.subject}{item.subject}{item.subject}{item.subject}{item.subject}{item.subject}{item.subject}{item.subject}{item.subject}</Typography>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </Stack>
  );
};

export default Announcement;
