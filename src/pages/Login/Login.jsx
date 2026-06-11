import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router";
import { emailValidate } from "../../helper/chechEmail";
import axios from "axios";
import { axiosInstance } from "../../helper/axiosInstance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!emailValidate(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }
    
    try {
      const response = await axiosInstance.post("/login", {
        email: email,
        password: password
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      setError("An error occurred during login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between min-h-screen">
        <div className="border border-black/50 rounded bg-white px-7 py-10 mx-auto">
          <form
            onSubmit={handleLogin}
            className="flex flex-col justify-between gap-4"
          >
            <h4 className="text-2xl mb-7">Login</h4>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="Email"
              className="bg-white border w-full p-2 border-black/50 focus:outline-none"
            />
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border w-full p-2 border-black/50"
              placeholder="password"
            />

            {error && <p className="text-red-500">{error}</p>}
            <button className="w-full bg-blue-600 text-white rounded hover:bg-blue-600/99 hover:scale-102 transition-all duration-200 cursor-pointer py-2">
              Login
            </button>
            <p>
              Not registered yet?{" "}
              <Link to="/signup" className="text-blue-600 underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
