import React, { useState } from 'react'
import styled from 'styled-components'
import { Background } from "../assets/images/Login";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        
        const user = {
            username: username,
            password: password
        }
        // let token = await loginAdmin(user)
        // console.log('get',token.accessToken)
        // // localStorage.setItem('token' ,token)
        // sessionStorage.setItem('token', token.accessToken)
        // window.location.reload()
        // // navigate("/")
    }
  return (
    <LoginCSS>
        <div className="login-box">
        <div className="card card-outline card-primary">
            <div className="card-header text-center">
                <a href="/" className="h1"><b>MiOto</b></a>
            </div>
            <div className="card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                        <input type="text" className="form-control" defaultValue="username" onChange={(e) => setUsername(e.target.value)}/>
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-envelope" />
                            </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-lock" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <button type="button" onClick={handleLogin} className="btn btn-primary btn-block">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </LoginCSS>
  )
}

export default Login
const LoginCSS = styled.div`
text-align : center;

  
  
`