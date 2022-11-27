import { Box, Typography } from "@mui/material";

import data from "./test";
import Slider from "react-slick";

const SliderContent = ({ data }) => {
  return (
    <Box className="p-6">
      <Typography>{data.title}</Typography>
    </Box>
  );
};

const Announcement = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false
  };
  return (
    <Box className="mb-6 bg-white rounded-lg drop-shadow-md pb-6">
      <Slider {...settings}>
        {data.data.map((item) => (
          <SliderContent data={item} key={item.title}/>
        ))}
      </Slider>
    </Box>
  );
};

export default Announcement;
