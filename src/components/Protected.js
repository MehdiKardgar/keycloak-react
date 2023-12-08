import React from "react";
import KeycloakClient from "../KeycloakClient";

const Protected = ({ token }) => {
  // here you can get the token and use it in your http calls
  console.log(token);

  return (
    <div>
      You are LoggedIn
      <button
        onClick={() => {
          KeycloakClient.logout({ redirectUri: "http://localhost:3000/" });
        }}
        label="Logout"
      >
        Logout
      </button>
    </div>
  );
};

export default Protected;
