import React from "react";
import KeycloakClient from "../KeycloakClient";

const Protected = ({ token }) => {
  // here you can get the token and use it in your http calls
  // console.log(token);
  console.log(KeycloakClient.tokenParsed);

  if (KeycloakClient && KeycloakClient.tokenParsed) {
    const username = KeycloakClient.tokenParsed.preferred_username; // Accessing username
    const name = KeycloakClient.tokenParsed.name; // Accessing name

    console.log("Username:", username);
    console.log("Name:", name);

    localStorage.setItem("username", username);
    localStorage.setItem("name", name);
  } else {
    console.log("Token not parsed or Keycloak instance not available");
  }

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
