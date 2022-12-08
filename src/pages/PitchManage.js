import React from 'react'
import styled from 'styled-components'
import Pitches from '../components/FootballPitchesManage/Pitches'
import Header from '../components/Header'
import Menu from '../components/Menu'

function PitchManage() {
  return (
    <PitchManageCSS>
        <div className='tt'>
            <Header />
            <div className="flext">
                <Menu />
                <div className='dash'>
                  <Pitches />
                </div>
            </div>
        </div>
    </PitchManageCSS>
  )
}

export default PitchManage

const PitchManageCSS = styled.div`
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