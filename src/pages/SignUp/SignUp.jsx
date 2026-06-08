import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router";
import { emailValidate } from "../../helper/chechEmail";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter a name");
      return;
    }
    if (!emailValidate(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }
    setError("");
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-between min-h-screen">
        <div className="border border-black/50 rounded bg-white px-7 py-10 mx-auto w-96">
          <form
            onSubmit={handleSignup}
            className="flex flex-col justify-between gap-4"
          >
            <h4 className="text-2xl mb-7">SignUp</h4>

            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Name"
              className="bg-white border w-full p-2 border-black/50 focus:outline-none"
            />
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
              Create Account
            </button>
            <p className="text-center">
              Already have account?{" "}
              <Link to="/signup" className="text-blue-600 underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
