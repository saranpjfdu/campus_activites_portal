import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage = ({ setUserRole }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/campus/users");
      const users = await response.json();

      const user = users.find(
        (u) => u.user_name === userName && u.password === password
      );

      if (user) {
        localStorage.setItem("userRole", user.user_role);
        setUserRole(user.user_role);

        if (user.user_role === 1) {
          navigate("/achivements");
        } else if (user.user_role === 2) {
          navigate("/achivements");
        }
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="MainComponentLogin">
    <div className="login-container">
    <div className="portal-title">Campus Activities Portal</div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username/E-mail id:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div> 
    </div>
  );
};

export default LoginPage;
