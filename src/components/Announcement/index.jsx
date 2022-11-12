import { Box } from "@mui/material";

import data from "./test";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  //   slidesToShow: 1,
  slidesToScroll: 1,
};

const Announcement = () => {
  return (
    <Slider {...settings}>
      {data.data.map((item) => (
        <Box>
          <img src={item.image} />
        </Box>
      ))}
    </Slider>
  );
};

export default Announcement;
