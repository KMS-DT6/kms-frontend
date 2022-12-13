import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import styled from 'styled-components'

function Turf() {
    const [date, setDate] = useState()
    const [start, setStart] = useState()
    const [end, setEnd] = useState()
    const [service, setService] = useState()
    const [count, setCount] = useState('0')

    const subId = useParams()
    const booKing = async () => {
        const data = {
            "subFootballPitchId": subId.id,
            "bookDay": date,
            "timeStart": start,
            "timeEnd": end,
            "bookingOtherService": [
              {
                "otherServiceId": service,
                "quantity": count
              }
            ]
          }
          
          const response = await axios.post(
            "http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/booking-pitches",
            data,
            {
                headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
            }
        )
        { response?.data?.success ? alert('Booking success') : alert('Booking failed')}
        window.location.reload()
    }
  return (
    <TurfCSS>
          {/* <form className="row"> */}
            <span>Booking</span>
            <br/>
            <br/>
            <label className="form-label">Date</label>
            <div className="col-md-12">
                  
                  <input type="date" onChange={(e) => setDate(e.target.value)} className="form-control"/>
              </div>
              <br/>
              <div className="col-md-12">
              <div className="col-md-6">
                  <label className="form-label">Time start (hh/mm)</label>
                  <input type="time" onChange={(e) => setStart(e.target.value)} className="form-control" />
              </div>
              <div className="col-md-6">
                  <label className="form-label">Time end</label>
                  <input type="time" onChange={(e) => setEnd(e.target.value)} className="form-control" />
              </div>
              </div>
              <br/>
              <div className="col-md-12">
              <div className="col-md-6">
                  <label className="form-label">Dịch vụ</label>
                  <select onChange={(e) => setService(e.target.value)} className="form-select">
                    <option value='0'>Không</option>
                      <option value = '2'>Bóng sân 7</option>
                      <option value ='6'>Áo đấu</option>
                  </select>
              </div>

              <div className="col-md-6">
                  <label className="form-label">Count</label>
                  <input type="text" onChange={(e) => setCount(e.target.value)} className="form-control" />
              </div>
              </div>
              <div className="col-md-3">
                  <button className="btn btn-primary form-control" onClick={booKing}>Đặt</button>
              </div>
          {/* </form> */}

    </TurfCSS>
  )
}

export default Turf

const TurfCSS = styled.div`
// margin-left:240px;
// margin-top:-270px;
// background-color:red;
.col-md-12 {
    display: flex;
}
margin-left: 400px;
body{margin-top:20px;}
width: 50%;
.row {
    margin-top: 20px;
}
span {
    // text-align: center;
    font-size: xxx-large;
    color: #0d6efd;
}

// .search {
//     display: flex;
// }
// .label {
//     display: inline;
//     padding: 0.2em 0.6em 0.3em;
//     font-size: 75%;
//     font-weight: 700;
//     line-height: 1;
//     color: #fff;
//     text-align: center;
//     white-space: nowrap;
//     vertical-align: baseline;
//     border-radius: 0.25em;
// }
// .label-success {
//     background-color: #5cb85c;
// }

// .label-denied {
//     background-color: #d9534f;
// }

// .label-warning {
//     background-color: #f0ad4e;
// }

// .label-active {
//     background-color: blue;
// }

// /* USER LIST TABLE */
// .user-list tbody td > img {
//     position: relative;
// 	// max-width: 100px;
//     // max-height:50px;
//     width : 100px;
//     height : 50px;
// 	float: left;
// 	margin-right: 15px;

//     object-fit: cover;
// }
// .user-list tbody td .user-link {
// 	display: block;
// 	font-size: 1.25em;
// 	padding-top: 3px;
// 	margin-left: 60px;
// }
// .user-list tbody td .user-subhead {
// 	font-size: 0.875em;
// 	font-style: italic;
// }

// /* TABLES */
// .table {
//     border-collapse: separate;
//     border-spacing : 0px;
// }
// .table-hover > tbody > tr:hover > td,
// .table-hover > tbody > tr:hover > th {
// 	background-color: #eee;
// }
// .table thead > tr > th {
// 	border-bottom: 1px solid #C2C2C2;
// 	padding-bottom: 0;
// }
// .table tbody > tr > td {
// 	font-size: 0.875em;
// 	background: #f5f5f5;
// 	border-top: 10px solid #fff;
// 	vertical-align: middle;
// 	padding: 12px 8px;
// }
// .table tbody > tr > td:first-child,
// .table thead > tr > th:first-child {
// 	padding-left: 40px;
// }
// .table thead > tr > th span {
// 	border-bottom: 2px solid #C2C2C2;
// 	display: inline-block;
// 	padding: 0 5px;
// 	padding-bottom: 5px;
// 	font-weight: normal;
// }
// .table thead > tr > th > a span {
// 	color: #344644;
// }
// .table thead > tr > th > a span:after {
// 	content: "\f0dc";
// 	font-family: FontAwesome;
// 	font-style: normal;
// 	font-weight: normal;
// 	text-decoration: inherit;
// 	margin-left: 5px;
// 	font-size: 0.75em;
// }
// .table thead > tr > th > a.asc span:after {
// 	content: "\f0dd";
// }
// .table thead > tr > th > a.desc span:after {
// 	content: "\f0de";
// }
// .table thead > tr > th > a:hover span {
// 	text-decoration: none;
// 	color: #2bb6a3;
// 	border-color: #2bb6a3;
// }
// .table.table-hover tbody > tr > td {
// 	-webkit-transition: background-color 0.15s ease-in-out 0s;
// 	transition: background-color 0.15s ease-in-out 0s;
// }
// .table tbody tr td .call-type {
// 	display: block;
// 	font-size: 0.75em;
// 	text-align: center;
// }
// .table tbody tr td .first-line {
// 	line-height: 1.5;
// 	font-weight: 400;
// 	font-size: 1.125em;
// }
// .table tbody tr td .first-line span {
// 	font-size: 0.875em;
// 	color: #969696;
// 	font-weight: 300;
// }
// .table tbody tr td .second-line {
// 	font-size: 0.875em;
// 	line-height: 1.2;
// }
// .table a.table-link {
// 	margin: 0 5px;
// 	font-size: 1.125em;
// }
// .table a.table-link:hover {
// 	text-decoration: none;
// 	color: #2aa493;
// }
// .table a.table-link.danger {
// 	color: #fe635f;
// }
// .table a.table-link.danger:hover {
// 	color: #dd504c;
// }

// .table-products tbody > tr > td {
// 	background: none;
// 	border: none;
// 	border-bottom: 1px solid #ebebeb;
// 	-webkit-transition: background-color 0.15s ease-in-out 0s;
// 	transition: background-color 0.15s ease-in-out 0s;
// 	position: relative;
// }
// .table-products tbody > tr:hover > td {
// 	text-decoration: none;
// 	background-color: #f6f6f6;
// }
// .table-products .name {
// 	display: block;
// 	font-weight: 600;
// 	padding-bottom: 7px;
// }
// .table-products .price {
// 	display: block;
// 	text-decoration: none;
// 	width: 50%;
// 	float: left;
// 	font-size: 0.875em;
// }
// .table-products .price > i {
// 	color: #8dc859;
// }
// .table-products .warranty {
// 	display: block;
// 	text-decoration: none;
// 	width: 50%;
// 	float: left;
// 	font-size: 0.875em;
// }
// .table-products .warranty > i {
// 	color: #f1c40f;
// }
// .table tbody > tr.table-line-fb > td {
// 	background-color: #9daccb;
// 	color: #262525;
// }
// .table tbody > tr.table-line-twitter > td {
// 	background-color: #9fccff;
// 	color: #262525;
// }
// .table tbody > tr.table-line-plus > td {
// 	background-color: #eea59c;
// 	color: #262525;
// }
// .table-stats .status-social-icon {
// 	font-size: 1.9em;
// 	vertical-align: bottom;
// }
// .table-stats .table-line-fb .status-social-icon {
// 	color: #556484;
// }
// .table-stats .table-line-twitter .status-social-icon {
// 	color: #5885b8;
// }
// .table-stats .table-line-plus .status-social-icon {
// 	color: #a75d54;
// }
`