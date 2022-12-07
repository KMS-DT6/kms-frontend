import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Menu from '../components/Menu'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Schedule from '../components/User/Schedule';

function HomePage() {
    const account = 'd'
  return (
    <HomePageCSS>
        <div className='tt'>
            <Header />
            <div className="flext">
                <Menu />
                <div className='dash'>
                  {/* <Dashboard /> */}
                  <Schedule />
                </div>
            </div>
        </div>
    </HomePageCSS>
  )
}

export default HomePage
const HomePageCSS = styled.div`
// background-color : yellow;
.flext {
  display:flex;
}
.dash {
  margin-left: -250px;
  width: 100%;
}
height:100%;
`