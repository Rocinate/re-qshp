import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import background from "@/assets/login-bg2.jpg"
import Typography from "@mui/material/Typography";

import React, { useState, useEffect } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('mode') == 'register') {
      setIsLogin(false)
    }
  }, [])

  return (
    <div className="flex-grow flex flex-row bg-cover items-center justify-center" style={{backgroundImage: `url(${background})`}}>
      <div className="bg-white p-10 opacity-80 rounded">
        <Typography>{isLogin ? "登录":"注册"}</Typography>
        <FormControl>
          <InputLabel htmlFor="account">用户名</InputLabel>
          <Input id="account" aria-describedby="account-text" />
        </FormControl>
        <FormControl>
        <InputLabel htmlFor="password">密码</InputLabel>
          <Input id="password" aria-describedby="password-text" type="password"/>
        </FormControl>
      </div>
    </div>
  )
}
export default Login;
