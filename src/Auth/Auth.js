import React from "react";

import Home from "../components/Home/Home";
import Login from "../shared/Login/Login";

import { useUserContext } from "../Context/useContext";

const Auth = () => {
  const { user } = useUserContext();
  return <>{user.isGuestUser ? <Login /> : <Home />}</>;
};

export default Auth;
