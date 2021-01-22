import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect("http://localhost:3000/admin")}>
      <Link to="/admin">Admin Login</Link>
    </button>
  );
};

export default LoginButton;
