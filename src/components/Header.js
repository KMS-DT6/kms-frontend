import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
function Header() {
  const [token, setToken] = useState("token");
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
              <Link to="/login" class="nav-item nav-link">
                <h5>Login</h5>
              </Link>
              <Link to="/logout" class="nav-item nav-link">
                <h5>Logout</h5>
              </Link>
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
