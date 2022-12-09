import { Box, Typography } from "@mui/material";

const Chip = ({ text, small }) => {
  return (
    <Box className="inline-block">
      <Box
        className="text-white bg-slate-500 rounded mr-2"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography variant="subtitle2" className={small? "px-1" : "px-2"}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Chip;
