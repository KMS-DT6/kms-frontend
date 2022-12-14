
import React, { Component, useState } from 'react'
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  const [token, setToken] = useState("token");
  const navigate = useNavigate()
  const handleLogout = () => {
    sessionStorage.removeItem('token')
    navigate("/")
    window.location.reload()
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
              <a href="/manage" class="nav-item nav-link active">
                Manage
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
                        {/* <BiLogIn className='icon'/> */}
                        <Link to="/login" className="nav-item nav-link"><h5>Login</h5></Link>
                      </div>
                    )
                  default:
                    return (
                      <div className='btnHandle'>
                        {/* <BiLogOut className='icon'/> */}
                        <a onClick={handleLogout} className="nav-item nav-link" ><h5>Logout</h5></a>
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
`;
