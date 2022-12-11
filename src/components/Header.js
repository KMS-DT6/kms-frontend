
import React, { Component, useState } from 'react'
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  const [token, setToken] = useState("token");
  const handleLogout = () => {
    sessionStorage.removeItem('token')
    // Navigate("/")
  }
  return (
    <Navigation>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a href="#" class="navbar-brand">
            Football turf management
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="/" class="nav-item nav-link active">
                Home
              </a>
              <a href="/my" class="nav-item nav-link">
                Profile
              </a>
            </div>
            <div class="navbar-nav ms-auto">
                
                
              {(() => {
                switch (sessionStorage.getItem('token')) {
                  case null:
                    return (
                      <div className='btnHandle'>
                        <BiLogIn className='icon'/>
                        <Link to="/login" class="nav-item nav-link"><h5>Login</h5></Link>
                      </div>
                    )
                  default:
                    return (
                      <div className='btnHandle'>
                        <BiLogOut className='icon'/>
                        <Link to="/login" onClick={handleLogout} class="nav-item nav-link" ><h5>Logout</h5></Link>
                      </div>
                    )
                }
              })()}
              
            </div>
          </div>
        </div>
      </nav>
    </Navigation>
  );
}

export default Header;

const Navigation = styled.div`
  // margin-left:240px;
  .btnHandle {
    display: flex;
  }
  .btnHandle .icon{
    width: 1.7rem;
    height: 1.7rem;
    margin-top:5px;
  }
`;
