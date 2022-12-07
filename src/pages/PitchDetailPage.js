import React from 'react'
import styled from 'styled-components'
import PitchDetail from '../components/FootballPitches/PitchDetail'
import Turf from '../components/FootballPitches/Turf'
import Header from '../components/Header'
import Menu from '../components/Menu'

function PitchDetailPage() {
  return (
    <PitchDetailPageCSS>
        <div className='tt'>
            <Header />
            <div className="flext">
                <Menu />
                <div className='dash'>
                  <PitchDetail />
                </div>
            </div>
        </div>
    </PitchDetailPageCSS>
  )
}

export default PitchDetailPage

const PitchDetailPageCSS = styled.div`
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