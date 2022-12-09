import React, { Component } from "react";
import { BiCar, BiLogOut } from "react-icons/bi";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { RiAdvertisementFill } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from 'react-router-dom';

function Menu(){
    const account = sessionStorage.getItem('account')
    return (
        <MenuCSS>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <a href="/" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                            <i className="fas fa-tachometer-alt fa-fw me-3" /><span>HomePage</span>
                        </a>
                        <a href="/schedule" className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-chart-area fa-fw me-3" /><span>My Schedule</span>
                        </a>
                        <a href="/pitch" className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-chart-area fa-fw me-3" /><span>Pitch</span>
                        </a>
                    </div>
                </div>
            </nav>
        </MenuCSS>
    )
}
export default Menu;

const MenuCSS = styled.div`
  width: 240px;
  height: 100%;
  // background-color:green;
`;
