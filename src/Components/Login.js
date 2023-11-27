import { useNavigate } from "react-router-dom";
import "./Login.css";
import React, { useState } from "react";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = async () => {
    try {
      const response = await fetch("https://stg.dhunjam.in/account/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Login successful:", result);

        // Pass the user ID as a parameter when navigating to the Dashboard
        navigate(`/dashboard/${result.data.id}`);
      } else {
        console.log("Login failed:", result.ui_err_msg || "Unknown error");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Venue Admin Login</h2>
      <form>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type={passwordVisible ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
      <div className="new-registration">
        <a href="#" onClick={handleForgotPassword} className="forgot-link">
          Forgot Password
        </a>
      </div>
    </div>
  );
};

export default Login;
