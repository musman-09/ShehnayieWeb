import React, { useState } from "react";
import shehnayie from "../../assets/images/shehnayie.jpg";
import "../../assets/css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogin = () => {
    if (email && password) {
      // simulate — replace with API later
      if (email === "admin@shehnayie.com") {
        dispatch(setLogin({ token: "fake-token-123", role: "admin" }));
        navigate("/admin");
      } else {
        dispatch(setLogin({ token: "fake-token-123", role: "user" }));
        navigate("/home");
      }
    } else {
      console.log("Please fill in all fields");
    }
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="left w-1/2">
        <img className=" h-full object-cover" src={shehnayie}></img>
      </div>

      <div className="right w-1/2 flex flex-col justify-center items-center gap-6">
        <div className="text">
          <h1 className="shehnayieText font-bold text-8xl">Welcome</h1>
          <h4 className="text-sm text-center text-gray-500 mt-2 ">
            Login With Email
          </h4>
        </div>

        <div className="inputFeilds flex flex-col gap-4 w-100">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className=" w-100 text-right">
          <p className="text-sm text-blue-400 cursor-pointer hover:underline">
            Forgot your password?
          </p>
        </div>

        <button
          onClick={handleLogin}
          className="w-100 bg-blue-500 text-white font-semibold py-4 px-4 rounded-lg hover:bg-blue-600 mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
