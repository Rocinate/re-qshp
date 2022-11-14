import { Typography } from "@mui/material";

const UserCard = ({ data }) => {
  return (
    <>
      <Typography variant="subtitle2" className="underline underline-offset-2">
        {data.author}
      </Typography>
    </>
  );
};

export default UserCard;
