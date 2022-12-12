import React from 'react'
import styled from 'styled-components'
import ListOtherService from '../components/OtherService/ListOtherService'
import HeaderManage from '../components/HeaderManage'
import MenuManage from '../components/MenuManage'

function FootballPitchAdminManage() {
  return (
    <FootballPitchAdminManageCSS>
        <div className='tt'>
            <HeaderManage />
            <div className="flext">
                <MenuManage />
                <div className='dash'>
                  <ListOtherService />
                </div>
            </div>
        </div>
    </FootballPitchAdminManageCSS>
  )
}

export default FootballPitchAdminManage

const FootballPitchAdminManageCSS = styled.div`
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