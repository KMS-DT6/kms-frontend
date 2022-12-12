import React from 'react'
import styled from 'styled-components'
import ListSubFootballPitch from '../../components/SubFootballPitch/ListSubFootballPitch'
import HeaderManage from '../../components/HeaderManage'
import MenuManage from '../../components/MenuManage'

function ListSubFootballPitchPage() {
  return (
    <ListSubFootballPitchCSS>
        <div className='tt'>
            <HeaderManage />
            <div className="flext">
                <MenuManage />
                <div className='dash'>
                  <ListSubFootballPitch />
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