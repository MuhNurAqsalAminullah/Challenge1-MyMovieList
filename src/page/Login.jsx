import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // ----- Email and password
  const validEmail = "user@example.com";
  const validPassword = "12345678";

  // ----- handle login function
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      localStorage.setItem("email", email);
      const from = location.state?.from?.pathname || "/beranda";
      navigate(from);
    } else {
      alert("Email atau password salah");
    }
  };

  return (
    <div className="container-login">
      <form className="box-login" onSubmit={handleLogin}>
        <h4 className="title-login">login</h4>
        <div>
          <p className="text-login">email</p>
          <input
            className="input-login"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-login">password</p>
          <input
            className="input-login"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="box-btn-login">
          <button className="btn-login" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
