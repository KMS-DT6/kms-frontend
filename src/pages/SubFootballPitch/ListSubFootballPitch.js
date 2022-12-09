import React from 'react'
import styled from 'styled-components'
import PitchDetail from '../../components/SubFootballPitch/ListSubFootballPitch'
import Header from '../../components/Header'
import Menu from '../../components/Menu'

function ListSubFootballPitchPage() {
  return (
    <ListSubFootballPitchCSS>
        <div className='tt'>
            <Header />
            <div className="flext">
                <Menu />
                <div className='dash'>
                  <PitchDetail />
                </div>
            </div>
        </div>
    </ListSubFootballPitchCSS>
  )
}

export default ListSubFootballPitchPage

const ListSubFootballPitchCSS = styled.div`
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