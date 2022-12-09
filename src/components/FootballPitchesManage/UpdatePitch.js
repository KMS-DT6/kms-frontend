import React from 'react';
import { useState, useEffect } from "react";
import styled from 'styled-components'
import "@coreui/coreui/dist/css/coreui.min.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CAlert, CFormSelect, CFormCheck } from "@coreui/react";
import { Link, useNavigate } from 'react-router-dom';
import CITY from "../../pages/vn/CITY.json";
import DISTRICT from "../../pages/vn/DISTRICT.json";
function UpdatePitch() {
  const token = localStorage.getItem("access_token");
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [img, setImg] = useState('');
  const [district, setdistrict] = useState("");
  const [city, setcity] = useState("");
  const [listcity, setlistcity] = useState([]);
  const [listdistrict, setlistdistrict] = useState([]);

  //city,district
  useEffect(() => {
    (async () => {
      try {
        setlistcity(CITY);
        setlistdistrict(DISTRICT);
      } catch (e) { }
    })();
  }, []);
  const setadd = async (code) => {
    const c = listcity.find((item) => item.code === code);
    setcity(c.name);

    const d = DISTRICT.filter((item) => item.parent_code === code);
    setlistdistrict(d);
  };
  return (
    <UpdatePitchCSS>
      <section className="vh-100" style={{ backgroundColor: '#fff' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-15">
              <h1 className="text-black mb-4">Add foodball pitch</h1>
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body">
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-3">
                      <h6 className="mb-0">Pitch Name</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-3">
                      <h6 className="mb-0">City</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <CFormSelect
                        value={listcity.find((item) => item.name === city)?.code}
                        onChange={(e) => setadd(e.target.value)}
                      >
                        {listcity.map((item) => (
                          <option value={item.code} label={item.name}></option>
                        ))}
                      </CFormSelect>
                    </div>
                  </div>
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-3">
                      <h6 className="mb-0">District</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <CFormSelect
                        value={district}
                        onChange={(e) => setdistrict(e.target.value)}
                      >
                        {listdistrict.map((item) => (
                          <option value={item.name} label={item.name}></option>
                        ))}
                      </CFormSelect>
                    </div>
                  </div>
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-3">
                      <h6 className="mb-0">Adress</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-3">
                      <h6 className="mb-0">Phone Number</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-3">
                      <h6 className="mb-0">Image</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                  </div>
                  <hr className="mx-n3" />
                  <div className="px-5 py-4">
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UpdatePitchCSS>)
}
export default UpdatePitch
const UpdatePitchCSS = styled.div`
.text-black {
    text-align: center;
}
.px-5.py-4 {
  text-align: center;
}
`