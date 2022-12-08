import React from 'react'
import styled from 'styled-components'
import Turf from '../components/FootballPitches/Turf'
import Header from '../components/Header'
import Menu from '../components/Menu'

function TurfPage() {
  return (
    <TurfPageCSS>
        <div className='tt'>
            <Header />
            <div className="flext">
                <Menu />
                <div className='dash'>
                  <Turf />
                </div>
            </div>
        </div>
    </TurfPageCSS>
  )
}

export default TurfPage

const TurfPageCSS = styled.div`
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