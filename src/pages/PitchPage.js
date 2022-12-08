import React from 'react'
import styled from 'styled-components'
import Pitches from '../components/FootballPitches/Pitches'
import Turf from '../components/FootballPitches/Turf'
import Header from '../components/Header'
import Menu from '../components/Menu'

function PitchPage() {
  return (
    <PitchPageCSS>
        <div className='tt'>
            <Header />
            <div className="flext">
                <Menu />
                <div className='dash'>
                  <Pitches />
                </div>
            </div>
        </div>
    </PitchPageCSS>
  )
}

export default PitchPage

const PitchPageCSS = styled.div`
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