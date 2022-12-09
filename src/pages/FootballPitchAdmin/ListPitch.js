import React from 'react'
import styled from 'styled-components'
import ListPitch from '../../components/FootballPitchesManage/ListPitch'
import Header from '../../components/Header'
import Menu from '../../components/Menu'

function ListPitchPage() {
  return (
    <ListPitchCSS>
        <div className='tt'>
            <Header />
            <div className="flext">
                <Menu />
                <div className='dash'>
                  <ListPitch />
                </div>
            </div>
        </div>
    </ListPitchCSS>
  )
}

export default ListPitchPage

const ListPitchCSS = styled.div`
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