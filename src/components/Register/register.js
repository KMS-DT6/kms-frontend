import React, { useState } from 'react'
import styled from 'styled-components'
import './fonts/material-design-iconic-font/css/material-design-iconic-font.min.css'
import './css/style.css'
import registerApi from '../../api/register'
import { useNavigate } from "react-router-dom";
function Register() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handle = async () => {
    try {
      const data = {
        username: username,
        password: Password,
        confirmPassword: ConfirmPassword,
        firstName: FirstName,
        lastName: LastName,
        phoneNumber: PhoneNumber
      }
      if (data.password !== data.confirmPassword) {
        alert("Nhập lại mật khẩu không chính xác");
        return;
      }
      const resData = await registerApi.register(data);
      if (resData.success) {
        alert(resData.message);
        navigate('/login');
      }
    } catch (error) {
      console.log('error', error);
      let message = '';
      error.errorDTOs.forEach(element => {
        message = message + element.key + " " + element.value + '\n';
      });
      alert(message);
    }
  }



  return (
    <RegisterCSS>
      <div>
        <div className="wrapper" style={{ backgroundImage: 'url("https://aobongda24h.com/pic/news/images/hinh-nen-san-co-(1).jpg")' }}>
          <div className="inner">
            <div className="image-holder">
              <img src="https://aobongda24h.com/pic/news/images/soccer-game-background-with-player_23-2147802906.jpg" alt />
            </div>
            <form>
              <h3>Registration</h3>
              <div className="form-group">
                <input type="text" placeholder="First Name" className="form-control-register" onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" className="form-control-register text" onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="form-wrapper">
                <input type="text" placeholder="Username" className="form-control-register text" onChange={(e) => setUsername(e.target.value)} />
                <i className="zmdi zmdi-account" />
              </div>
              <div className="form-wrapper">
                <input type="text" placeholder="Phone Number" className="form-control-register text" onChange={(e) => setPhoneNumber(e.target.value)} />
                <i className="zmdi zmdi-phone" />
              </div>
              <div className="form-wrapper">
                <input type="password" placeholder="Password" className="form-control-register text" onChange={(e) => setPassword(e.target.value)} />
                <i className="zmdi zmdi-lock" />
              </div>
              <div className="form-wrapper">
                <input type="password" placeholder="Confirm Password" className="form-control-register text" onChange={(e) => setConfirmPassword(e.target.value)} />
                <i className="zmdi zmdi-lock" />
              </div>
              <button onClick={handle} type='button'>Register
                <i className="zmdi zmdi-arrow-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </RegisterCSS>
  )
}

export default Register;
const RegisterCSS = styled.div`
input {
  border-radius: 0px;
}
`
