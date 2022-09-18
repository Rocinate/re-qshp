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

import ReCAPTCHA from "react-google-recaptcha";
import { useEffect } from "react";

const Form = (props) => {
  const { login } = props;

  const [tab, setTab] = useState("1");
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(null);
  const { register, handleSubmit } = useForm();

  const site_key = import.meta.env.PROD
    ? import.meta.env.VITE_RECAPTCHA_KEY_PRODUCTION
    : import.meta.env.VITE_RECAPTCHA_KEY;
  // const { isLoading, isSuccess, isError, data, error} = useQuery('login', login, )

  const handleTabChange = (event, value) => {
    setTab(value);
  };

  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onTokenChange = (value) => {
    setToken(value);
  };

  useEffect(() => {
    window.recaptchaOptions = {
      useRecaptchaNet: true,
    };
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <Box className="mb-4">
          <Typography gutterBottom variant="h3">
            清水河畔
          </Typography>
          <Typography className="float-right" gutterBottom>
            成电人的聚集地
          </Typography>
        </Box>
      </div>
      <Box className="overflow-hidden">
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

        <form
          onSubmit={handleSubmit((data) =>
            login(Object.assign(data, { token: token }))
          )}
        >
          <div className="py-2 pt-8">
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
              {...register("user")}
            />
          </div>
          <div className="py-2">
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
            align="right"
            className="my-8 cursor-pointer pb-4"
            style={{ color: "#1790fe" }}
          >
            忘记密码 ?
          </Typography>
          <div
            style={{
              transform: "scale(1.3157)",
              transformOrigin: "0 0",
              height: "103px",
            }}
          >
            <ReCAPTCHA
              sitekey={site_key}
              onChange={onTokenChange}
            />
          </div>
          <input
            type="submit"
            className="w-full my-2 py-3 text-white cursor-pointer"
            style={{ backgroundColor: "#1790fe", borderRadius: "4px" }}
            value="登  录"
          />
        </form>
      </Box>
    </>
  );
};

export default Form;
