import React from 'react'
import styled from 'styled-components'
import UpdatePitch from '../../components/FootballPitchesManage/UpdatePitch'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import { CAlert, CFormSelect, CFormCheck } from "@coreui/react";

function UpdatePitchPage() {
  return (
    <UpdatePitchCSS>
        <div className='tt'>
            <Header />
            <div className="flext">
                <Menu />
                <div className='dash'>
                  <UpdatePitch />
                </div>
            </div>
        </div>
    </UpdatePitchCSS>
  )
}

export default UpdatePitchPage

const UpdatePitchCSS = styled.div`
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