import React, { useState, useEffect, useRef } from "react";
import KeycloakClient from "../KeycloakClient";
import { click } from "@testing-library/user-event/dist/click";

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;

    KeycloakClient.init({
      onLoad: "login-required",
    }).then((res) => {
      setLogin(res);
      setToken(KeycloakClient.token);
    });
  }, []);

  return [isLogin, token];
};

export default useAuth;
