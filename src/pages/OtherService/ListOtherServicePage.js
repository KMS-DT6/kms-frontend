import React from 'react'
import styled from 'styled-components'
import ListOtherService from '../../components/OtherService/ListOtherService'
import HeaderManage from '../../components/HeaderManage'
import Menu from '../../components/MenuManage'


function ListOtherServicePage() {
  return (
    <ListOtherServiceCSS>
        <div className='tt'>
            <HeaderManage />
            <div className="flext">
                <Menu />
                <div className='dash'>
                  <ListOtherService />
                </div>
            </div>
        </div>
    </ListOtherServiceCSS>
  )
}

export default ListOtherServicePage

const ListOtherServiceCSS = styled.div`
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