import { Box, Typography, Stack } from "@mui/material";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SwiperContent = ({data}) => {
  return (
    <SwiperSlide>
      <Box>{data.title}</Box>
    </SwiperSlide>
  );
};

const Announcement = () => {
  return (
    <Stack direction="row" className="bg-white drop-shadow-md mb-6">
        <Box className="bg-blue-400 flex items-center p-4">
          <Typography className="text-white text-lg font-bold">公告</Typography>
        </Box>
        <Swiper
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="h-20 p-6"
      >
        <SwiperSlide className='h-full'><Typography>Slide 1</Typography></SwiperSlide>
        <SwiperSlide className='h-full'><Typography>Slide 2</Typography></SwiperSlide>
        <SwiperSlide className='h-full'><Typography>Slide 3</Typography></SwiperSlide>
        <SwiperSlide className='h-full'><Typography>Slide 4</Typography></SwiperSlide>
      </Swiper>
    </Stack>
  );
};

export default Announcement;
