import React from 'react'
import styled from 'styled-components'
import Pitches from '../components/FootballPitches/Pitches'
import Turf from '../components/FootballPitches/Turf'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Schedule from '../components/User/Schedule'

function SchedulePage() {
  return (
    <SchedulePageCSS>
        <div className='tt'>
            <Header />
            <div className="flext">
                <Menu />
                <div className='dash'>
                  <Schedule />
                </div>
            </div>
        </div>
    </SchedulePageCSS>
  )
}

export default SchedulePage

const SchedulePageCSS = styled.div`
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