import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Tab,
  Tabs,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Person, Https, Visibility, VisibilityOff } from "@mui/icons-material";

const Form = (props) => {
  const { login } = props;

  const [tab, setTab] = useState("1");
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  // const { isLoading, isSuccess, isError, data, error} = useQuery('login', login, )

  const handleTabChange = (event, value) => {
    setTab(value);
  };

  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex justify-center">
        <Box className="mb-4">
          <Typography gutterBottom variant="h3">
            清水河畔
          </Typography>
          <Typography className="float-right" gutterBottom>成电人的聚集地</Typography>
        </Box>
      </div>
      <Box>
        {/* <Box className="p-11 bg-white shadow-md" style={{ width: "440px" }}> */}
        <Box className="border-b border-b-slate-300">
          <Tabs value={tab} onChange={handleTabChange} centered>
            <Tab
              value="1"
              label={<Typography>统一身份认证</Typography>}
              className="font-extrabold"
            />
            <Tab
              value="2"
              label={<Typography>账号密码登录</Typography>}
              className="font-extrabold"
            />
          </Tabs>
        </Box>

        <form onSubmit={handleSubmit((data) => login(data))}>
          <div className='py-2 pt-8'>
          <TextField
            fullWidth
            required
            label={tab == "1" ? "学号" : "用户名"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            {...register("account")}
          />
          </div>
          <div className='py-2'>
          <TextField
            fullWidth
            required
            label="密码"
            type={showPassword ? "" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Https />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordClick} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("password")}
          />
          </div>
          <Typography
            className="my-8 float-right cursor-pointer"
            style={{ color: "#1790fe" }}
          >
            忘记密码 ?
          </Typography>
          <input
            type="submit"
            className="w-full my-2 py-3 text-white cursor-pointer"
            style={{ backgroundColor: "#1790fe", borderRadius: '4px' }}
            value="登  录"
          />
        </form>
      </Box>
    </>
  );
};

export default Form;
