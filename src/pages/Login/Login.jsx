import { Typography, Box, LinearProgress } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import bgImg from "@/assets/login-bg1.jpg";
import Form from "./Form";
import UserList from "./UserList";
import SwipeableViews from "react-swipeable-views";

const Clause = () => {
  return (
    <div
      className="absolute bottom-1 right-1 flex text-white"
      style={{ fontSize: "14px" }}
    >
      <p className="mx-2">使用条款</p>
      <p className="mx-2">隐私和cookie</p>
    </div>
  );
};

const Login = () => {
  const [progress, setProgress] = useState(0);
  const [userList, setUserList] = useState([1, 2, 3]);

  const login = (data) => {
    console.log(data)
  };

  const chooseUser = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-full">
      <div className="w-3/4">
        <div
          className="bg-cover absolute w-full h-full"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
      </div>
      <div className="flex items-center justify-center flex-col float-right flex-1 relative px-40">
        <div className="w-full h-full absolute bg-opacity-10 bg-black">
          <div className="w-full h-full blur-sm bg-opacity-10 bg-black"></div>
        </div>

        <div style={{ borderRadius: "4px" }} className='overflow-hidden'>
          <LinearProgress />
          <div className="relative z-10 bg-white p-11 box-border">
            <SwipeableViews index={progress} style={{ width: "400px" }}>
              <Form login={login} />
              <UserList data={userList} choose={chooseUser} />
            </SwipeableViews>
          </div>
        </div>

        <Clause />
      </div>
    </div>
  );
};

export default Login;
