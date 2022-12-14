import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

function PitchDetail() {
  const [turfes, setTurfes] = useState([])
  
  useEffect(() => {
    fetchData();
  }, [])

  const id = useParams()

  const fetchData = async () => {
    const url = `http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/sub-football-pitches?footballPitchId=${id.id}`
    console.log(url)
    const response = await axios.get(url,{ headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`}})
    console.log(response?.data?.data?.items)
    setTurfes(response?.data?.data?.items)

}
  return (
    <PitchDetailCSS>
        
        <div>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
          <div className="container">
            
          
            <div className="row">
            <span className='spanHe'>Sub football pitch list :</span>
              <div className="col-lg-12">
                <div className="main-box clearfix">
                  <div className="table-responsive">
                    <table className="table user-list">
                      <thead>
                        <tr>
                          <th><span>Name</span></th>
                          <th><span>Size</span></th>
                          <th className="text-center"><span>Status</span></th>
                          <th><span>Price per hour</span></th>
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                turfes?.map((turf, index) => (
                  <tr key={index}>
                    <td>
                      <img src={turf?.image} />
                      {turf?.subFootballPitchName}
                    </td>
                    <td>
                      {turf?.size}
                    </td>
                    {/* <td style={{ width: '10%' }}>
                      {turf?.status? <p>H???t</p> : <p>C??n</p>}
                      </td> */}
                    {(() => {
                      switch (turf?.status) {
                        case false:
                          return (
                            <td className="text-center">
                              <span className="label label-success">C??n</span>
                            </td>
                          )
                        default:
                          return (
                            <td className="text-center">
                              <span className="label label-denied">H???t</span>
                            </td>
                          )
                      }
                    })()}
                    <td>
                      {turf?.pricePerHour}
                    </td>
                    <td style={{ width: '10%' }}>
                      <a href={`/turf/${turf?.subFootballPitchId}`} className="table-link">
                        <span className="fa-stack">
                          <i className="fa fa-square fa-stack-2x" />
                          <i className="fa fa-plus fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                    </td>
                  </tr>
                ))
              }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </PitchDetailCSS>
  );
}

export default PitchDetail;

const PitchDetailCSS = styled.div`
// margin-left:240px;
// margin-top:-270px;
// background-color:red;
font-size: 15px;
.container {
  margin-left: 20px;
  width: 98%;
}
.spanHe {
  text-align: center;
  font-size: xxx-large;
  color: #0d6efd;
  margin-bottom:10px;
}
margin-left: 240px;
body{margin-top:20px;}

  .search {
    display: flex;
  }
  .label {
    display: inline;
    padding: 0.2em 0.6em 0.3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25em;
  }
  .label-success {
    background-color: #5cb85c;
  }

  .label-denied {
    background-color: #d9534f;
  }

  .label-warning {
    background-color: #f0ad4e;
  }

  .label-active {
    background-color: blue;
  }

  /* USER LIST TABLE */
  .user-list tbody td > img {
    position: relative;
    // max-width: 100px;
    // max-height:50px;
    width: 100px;
    height: 50px;
    float: left;
    margin-right: 15px;

    object-fit: cover;
  }
  .user-list tbody td .user-link {
    display: block;
    font-size: 1.25em;
    padding-top: 3px;
    margin-left: 60px;
  }
  .user-list tbody td .user-subhead {
    font-size: 0.875em;
    font-style: italic;
  }

  /* TABLES */
  .table {
    border-collapse: separate;
    border-spacing: 0px;
  }
  .table-hover > tbody > tr:hover > td,
  .table-hover > tbody > tr:hover > th {
    background-color: #eee;
  }
  .table thead > tr > th {
    border-bottom: 1px solid #c2c2c2;
    padding-bottom: 0;
  }
  .table tbody > tr > td {
    font-size: 0.875em;
    background: #f5f5f5;
    border-top: 10px solid #fff;
    vertical-align: middle;
    padding: 12px 8px;
  }
  .table tbody > tr > td:first-child,
  .table thead > tr > th:first-child {
    padding-left: 40px;
  }
  .table thead > tr > th span {
    border-bottom: 2px solid #c2c2c2;
    display: inline-block;
    padding: 0 5px;
    padding-bottom: 5px;
    font-weight: normal;
  }
  .table thead > tr > th > a span {
    color: #344644;
  }
  .table thead > tr > th > a span:after {
    content: "\f0dc";
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    margin-left: 5px;
    font-size: 0.75em;
  }
  .table thead > tr > th > a.asc span:after {
    content: "\f0dd";
  }
  .table thead > tr > th > a.desc span:after {
    content: "\f0de";
  }
  .table thead > tr > th > a:hover span {
    text-decoration: none;
    color: #2bb6a3;
    border-color: #2bb6a3;
  }
  .table.table-hover tbody > tr > td {
    -webkit-transition: background-color 0.15s ease-in-out 0s;
    transition: background-color 0.15s ease-in-out 0s;
  }
  .table tbody tr td .call-type {
    display: block;
    font-size: 0.75em;
    text-align: center;
  }
  .table tbody tr td .first-line {
    line-height: 1.5;
    font-weight: 400;
    font-size: 1.125em;
  }
  .table tbody tr td .first-line span {
    font-size: 0.875em;
    color: #969696;
    font-weight: 300;
  }
  .table tbody tr td .second-line {
    font-size: 0.875em;
    line-height: 1.2;
  }
  .table a.table-link {
    margin: 0 5px;
    font-size: 1.125em;
  }
  .table a.table-link:hover {
    text-decoration: none;
    color: #2aa493;
  }
  .table a.table-link.danger {
    color: #fe635f;
  }
  .table a.table-link.danger:hover {
    color: #dd504c;
  }

  .table-products tbody > tr > td {
    background: none;
    border: none;
    border-bottom: 1px solid #ebebeb;
    -webkit-transition: background-color 0.15s ease-in-out 0s;
    transition: background-color 0.15s ease-in-out 0s;
    position: relative;
  }
  .table-products tbody > tr:hover > td {
    text-decoration: none;
    background-color: #f6f6f6;
  }
  .table-products .name {
    display: block;
    font-weight: 600;
    padding-bottom: 7px;
  }
  .table-products .price {
    display: block;
    text-decoration: none;
    width: 50%;
    float: left;
    font-size: 0.875em;
  }
  .table-products .price > i {
    color: #8dc859;
  }
  .table-products .warranty {
    display: block;
    text-decoration: none;
    width: 50%;
    float: left;
    font-size: 0.875em;
  }
  .table-products .warranty > i {
    color: #f1c40f;
  }
  .table tbody > tr.table-line-fb > td {
    background-color: #9daccb;
    color: #262525;
  }
  .table tbody > tr.table-line-twitter > td {
    background-color: #9fccff;
    color: #262525;
  }
  .table tbody > tr.table-line-plus > td {
    background-color: #eea59c;
    color: #262525;
  }
  .table-stats .status-social-icon {
    font-size: 1.9em;
    vertical-align: bottom;
  }
  .table-stats .table-line-fb .status-social-icon {
    color: #556484;
  }
  .table-stats .table-line-twitter .status-social-icon {
    color: #5885b8;
  }
  .table-stats .table-line-plus .status-social-icon {
    color: #a75d54;
  }
`;
