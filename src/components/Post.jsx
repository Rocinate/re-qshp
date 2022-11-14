import { Box, Typography, Avatar, Stack, Chip } from "@mui/material";

const Post = ({ data }) => {
  return (
    <Box className="p-6">
      <Stack direction="row">
        <Box sx={{ mr: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 54, height: 54 }}
            variant="rounded"
          />
        </Box>
        <Box>
          <Stack direction="row">
            <Chip label="primary" size="small" color="primary" sx={{ mr: 1 }} />
            <Typography>{data.subject}</Typography>
          </Stack>
          <Typography></Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Post;
