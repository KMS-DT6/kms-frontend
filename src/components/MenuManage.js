import React, { Component } from "react";
import styled from "styled-components";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function MenuManage() {
  const account = sessionStorage.getItem("account");
  return (
    <MenuManageCSS>
      <nav
        id="sidebarMenuManage"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <a
              href="/football-pitch-admin"
              className="list-group-item list-group-item-dark py-2 ripple"
            >
              <i className="fas fa-chart-area fa-fw me-3" />
              <span>Manage Sub Football Pitch</span>
            </a>
            <a
              href="/list-other-service"
              className="list-group-item list-group-item-dark py-2 ripple"
            >
              <i className="fas fa-chart-area fa-fw me-3" />
              <span>Manage Other Service</span>
            </a>
          </div>
        </div>
      </nav>
    </MenuManageCSS>
  );
}
export default MenuManage;

const MenuManageCSS = styled.div`
  width: 240px;
  height: 100%;
`;
