import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import otherServiceApi from '../../api/otherServiceApi';

import {
  CModal,
  CButton,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CFormSelect,
  CForm,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

function ListOtherService() {
  const [ListOtherService, setListOtherService] = useState([]);
  const [otherServiceName, setOtherServiceName] = useState('');
  const [quantity, setQuantity] = useState(50);
  const [price, setPrice] = useState(0);
  const [priceBy, setPriceBy] = useState('cai');
  const [visible, setVisible] = useState(false);
  const [idOtherService, setIdOtherService] = useState(null);


  useEffect(() => {
    getListOtherService();
  }, [])
  const getListOtherService = async () => {
    try {
      const token = sessionStorage.getItem('token')
      console.log(token);
      const resData = await otherServiceApi.getListOtherService({
        headers: {
          Authorization: `Bearer ${token}`
        }
        // params: { ...ValueSubmit }
      })
      console.log(resData?.data?.items);
      setListOtherService(resData?.data?.items);
    } catch (error) {
      console.log(error)
    }
  }
  const createOtherService = async (data) => {
    try {
      console.log(data)
      const token = sessionStorage.getItem('token')
      console.log(token);
      const resData = await otherServiceApi.createOtherService(data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
        // params: { ...ValueSubmit }
      })
      console.log(resData);
      // setListOtherService(resData?.data?.items);
    } catch (error) {
      console.log(error)
    }
  }
  const updateOtherService = async (data) => {
    try {
      const token = sessionStorage.getItem('token')
      console.log(token);
      const resData = await otherServiceApi.updateOtherService(data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(resData);
    } catch (error) {
      console.log(error)
    }
  }
  async function handleCreate() {
    let dataRequest = {
      otherServiceName: otherServiceName,
      quantity: quantity - 0,
      pricePerOne: 0,
      pricePerHour: 0
    }
    if (priceBy == 'cai') {
      dataRequest.pricePerOne = price - 0;
    } else {
      dataRequest.pricePerHour = price - 0;
    }
    await createOtherService(dataRequest);
    getListOtherService();
    setVisible(false);

  }
  const setValueOtherService = async(id) => {
    setIdOtherService(id);
    console.log('setValueOtherService', idOtherService);
    if (!id) {
      setOtherServiceName('');
      setPriceBy('cai');
      setPrice(0);
      setQuantity(0);
    } else {
      try {
        const token = sessionStorage.getItem('token')
        const resData = await otherServiceApi.getOtherServiceById(id, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const data = resData?.data;
        setOtherServiceName(data.otherServiceName);
        if (data.pricePerOne == 0) {
          setPrice(data.pricePerHour);
          setPriceBy('gio');
        } else {
          setPrice(data.pricePerOne);
          setPriceBy('cai');
        }
        setQuantity(50);
      } catch (error) {
        console.log(error)
      }
    }
  }
  async function handleEdit(id) {
    console.log('edit', id);
    let dataRequest = {
      id: id,
      otherServiceName: otherServiceName,
      quantity: quantity - 0,
      pricePerOne: 0,
      pricePerHour: 0
    }
    if (priceBy == 'cai') {
      dataRequest.pricePerOne = price - 0;
    } else {
      dataRequest.pricePerHour = price - 0;
    }
    await updateOtherService(dataRequest);
    getListOtherService();
    setVisible(false);
  }
  const handleSubmit = async () => {
    console.log('Submit ', idOtherService);
    console.log(otherServiceName,priceBy,price,quantity);
    if (!idOtherService) {
      handleCreate();
    } else handleEdit(idOtherService);
  }
  const handleDelete = async (id) => {
    try {
      console.log(id)
      const token = sessionStorage.getItem('token')
      console.log(token);
      const resData = await otherServiceApi.deleteOtherService(id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
        // params: { ...ValueSubmit }
      })
      console.log(resData);
      // setListOtherService(resData?.data?.items);
    } catch (error) {
      console.log(error)
    }
    getListOtherService();
  }
  return (
    <ListOtherServiceCSS>
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>Other Service</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <table className="table">
            <tr>
              <td>
                <b>Name</b>
              </td>
              <td>
                <input type="text" style={{ width: '380px' }} onChange={(e) => setOtherServiceName(e.target.value)} value={otherServiceName} />
              </td>
            </tr>
            <tr>
              <td>
                <b>Price by</b>
              </td>
              <td id>
                {
                  priceBy == 'cai' ? (
                    <CFormSelect style={{ width: '380px' }}
                      onChange={(e) => setPriceBy(e.target.value)}
                    >
                      <option value={"cai"} label={"cái"} selected></option>
                      <option value={"gio"} label={"giờ"}></option>
                    </CFormSelect>
                  ) : (
                    <CFormSelect style={{ width: '380px' }}
                      onChange={(e) => setPriceBy(e.target.value)}
                    >
                      <option value={"cai"} label={"cái"} ></option>
                      <option value={"gio"} label={"giờ"} selected></option>
                    </CFormSelect>
                  )
                }
              </td>
            </tr>
            <tr>
              <td>
                <b>Price</b>
              </td>
              <td>
                <input type="text" style={{ width: '380px' }} onChange={(e) => setPrice(e.target.value)} value={price} />
              </td>
            </tr>
            <tr>
              <td>
                <b>Quantity</b>
              </td>
              <td>
                <input type="text" style={{ width: '380px' }} onChange={(e) => setQuantity(e.target.value)} value={quantity} />
              </td>
            </tr>
          </table>
          <div className="text-center">
            <button className="btn btn-primary" style={{ marginTop: '0px' }} onClick={() =>handleSubmit()}>Submit</button>
          </div>
        </CModalBody>
      </CModal>
      <div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="container">
          <table className="table user-list">
            <thead>
              <tr>
                <th><span>Name service</span></th>
                <th><span>Price (VND)</span></th>
                <th>
                  <a onClick={(e) => { setIdOtherService(null) ; setValueOtherService(idOtherService); setVisible(true) }} className="btn btn-primary" type="button">
                    Create
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                ListOtherService?.map((service, index) => (
                  <tr key={index}>
                    <td>
                      {service?.otherServiceName}
                    </td>
                    <td>
                      {service?.pricePerHour == 0 ? service?.pricePerOne : service?.pricePerHour + '/giờ'}
                    </td>
                    <td style={{ width: '15%' }}>
                      <a onClick={() => {setValueOtherService(service?.otherServiceId); setVisible(true) }} className="table-link">
                        <span className="fa-stack">
                          <i className="fa fa-square fa-stack-2x" />
                          <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                        </span>
                      </a>
                      <a onClick={() => handleDelete(service?.otherServiceId)} className="table-link danger">
                        <span className="fa-stack">
                          <i className="fa fa-square fa-stack-2x" />
                          <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
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

    </ListOtherServiceCSS >
  )
}

export default ListOtherService

const ListOtherServiceCSS = styled.div`
#tt {
  width: 54%;
}
.container {
  width: 60%;
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
.
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
    width : 100px;
    height : 50px;
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
    border-spacing : 0px;
}
.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
	background-color: #eee;
}
.table thead > tr > th {
	border-bottom: 1px solid #C2C2C2;
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
	border-bottom: 2px solid #C2C2C2;
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
`