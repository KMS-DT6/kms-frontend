import React, { Component } from 'react'
import styled from 'styled-components';

export default class Footer extends Component {
  render() {
    return (
        <div className='footer'>
            <footer className="main-footer">
                <strong><a href="https://youtube.com">Mioto.vn</a>Hotline : 01000001</strong>
                
            </footer>
        </div>
    )
  }
}
const FooterContainer = styled.div`
  
  height: 100px;
`;
