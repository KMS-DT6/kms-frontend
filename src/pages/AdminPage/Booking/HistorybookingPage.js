import React from 'react'
import styled from 'styled-components'
import HistoryBooking from '../../../components/Booking/HistoryBooking'
import Header from '../../../components/Header'
import Menu from '../../../components/Menu'

function HistorybookingPage(){
    return(
    <ListSubFootballPitchCSS>
    <div className='tt'>
        <Header />
        <div className="flext">
            <Menu />
            <div className='dash'>
              <HistoryBooking />
            </div>
        </div>
    </div>
</ListSubFootballPitchCSS>)
}
export default HistorybookingPage
const ListSubFootballPitchCSS = styled.div`
// background-color : yellow;
.flext {
  display:flex;
}
.dash {
    margin-left: 26px;
    width: 100%;
}
height:100%;
.form-switch .form-check-input{
    width: 4em;
    height: 2em;
}
.form-check-label{
    font-size: 18px;
    padding: 4px;
    margin-left: 13px;
}
`