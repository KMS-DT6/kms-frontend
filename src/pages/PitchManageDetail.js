import React from 'react'
import styled from 'styled-components'
import PitchDetail from '../components/FootballPitchesManage/PitchDetail'
import Header from '../components/Header'
import Menu from '../components/Menu'

function PitchManageDetail() {
  return (
    <PitchManageDetailCSS>
        <div className='tt'>
            <Header />
            <div className="flext">
                <Menu />
                <div className='dash'>
                  <PitchDetail />
                </div>
            </div>
        </div>
    </PitchManageDetailCSS>
  )
}

export default PitchManageDetail

const PitchManageDetailCSS = styled.div`
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