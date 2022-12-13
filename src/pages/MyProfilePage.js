import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import HeaderManage from '../components/HeaderManage'
import Menu from '../components/Menu'
import MyProfile from '../components/User/MyProfile'
import MenuManage from '../components/MenuManage'
import jwt_decode from 'jwt-decode'

function MyProfilePage() {
  var menu, header;
  const role = jwt_decode(sessionStorage.getItem("token")).roles[0];
  if (role == "FOOTBALL_PITCH") {
    menu = <MenuManage />
    header= <HeaderManage/>
  } 
  else if (role == "CUSTOMER") {
    menu = <Menu />
    header= <Header/>
  }
  return (
    <MyProfilePageCSS>
        <div className='tt'>
            {header}
            <div className="flext">
                {menu}
                <div className='dash'>
                  <MyProfile />
                </div>
            </div>
        </div>
    </MyProfilePageCSS>
  )
}

export default MyProfilePage

const MyProfilePageCSS = styled.div`
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