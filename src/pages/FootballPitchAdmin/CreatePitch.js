import React from 'react'
import styled from 'styled-components'
import CreatePitch from '../../components/FootballPitchesManage/CreatePitch'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import { CAlert, CFormSelect, CFormCheck } from "@coreui/react";

function CreatePitchPage() {
  return (
    <CreatePitchCSS>
        <div className='tt'>
            <Header />
            <div className="flext">
                <Menu />
                <div className='dash'>
                  <CreatePitch />
                </div>
            </div>
        </div>
    </CreatePitchCSS>
  )
}

export default CreatePitchPage

const CreatePitchCSS = styled.div`
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