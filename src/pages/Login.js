import React, { useState } from "react";
import styled from "styled-components";
import jwt_decode from "jwt-decode";
import { Background } from "../assets/images/Login";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    const user = {
      username: username,
      password: password,
    };
    //console.log(user);
    const response = await axios.post(
      "http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/login",
      user
    );
    console.log( response?.data?.access_token)
    sessionStorage.setItem("token", response?.data?.access_token);
    //console.log(sessionStorage.getItem("token"));
    //console.log(jwt_decode(sessionStorage.getItem("token")).roles[0]);
    if (jwt_decode(sessionStorage.getItem("token")).roles[0] === "ADMIN") {
      navigate("/admin");
    }
    if (
      jwt_decode(sessionStorage.getItem("token")).roles[0] === "FOOTBALL_PITCH"
    ) {
      navigate("/manage");
    }
    if (jwt_decode(sessionStorage.getItem("token")).roles[0] === "CUSTOMER") {
      navigate("/");
    }
  }
  return (
    <LoginCSS>
      <img src={Background} className="w-full" alt={"Phone images"} />
      <div className="login-box">
        {/* <img src={Background} className="w-full" alt={"Phone images"} /> */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="/" className="h5">
              <b>Football turf management</b>
            </a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to booking</p>
            <form>
              <div className="input-group mb-3">
                <span>Username</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <span>Password</span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="buttonN">
                <div className="">
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="btn btn-success btn-block"
                  >
                    Sign In
                  </button>
                </div>
                <div className="">
                  <Link to="/register">
                    <button type="button" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoginCSS>
  );
}

export default Login;
const LoginCSS = styled.div`
  display: flex;

  .buttonN {
    display: flex;
    // margin-left: 23%;
  }
  button {
    margin-right: 5px;
  }
  span {
    margin-top: 6px;
    width: 80px;
  }

  .login-box {
    display: flex;
    height: 290px;
  }
  margin-left: 25%;
  margin-top: 10%;
  span {
    margin-right: 10px;
  }
  .w-full {
    width: 400px;
  }
`;
