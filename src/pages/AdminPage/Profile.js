import axios from "axios";

import { useState, useEffect } from "react";
import { CAlert, CFormSelect, CFormCheck } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import CITY from "../vn/CITY.json";
import DISTRICT from "../vn/DISTRICT.json";

const Profile = () => {
  const token = localStorage.getItem("access_token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const [profile, setProfile] = useState({});
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [gender, setgender] = useState(true);
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [street, setstreet] = useState("");
  const [district, setdistrict] = useState("");
  const [city, setcity] = useState("");
  const [placeOfBirth, setplaceOfBirth] = useState("");
  const [workingPosition, setworkingPosition] = useState("");
  const [roleId, setroleId] = useState(3);
  const [visible, setVisible] = useState(false);
  const [listcity, setlistcity] = useState([]);
  const [listdistrict, setlistdistrict] = useState([]);

  //console.log({ CITY });
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("users");
        //console.log({ data });
        setProfile(data.data.user);
        setfirstName(data.data.user.firstName);
        setlastName(data.data.user.lastName);
        setdateOfBirth(data.data.user.dateOfBirth);
        setgender(data.data.user.gender);
        setphone(data.data.user.phone);
        setemail(data.data.user.email);
        setstreet(data.data.user.street);
        setdistrict(data.data.user.district);
        setcity(data.data.user.city);
        setplaceOfBirth(data.data.user.placeOfBirth);
        setworkingPosition(data.data.user.workingPosition);
      } catch (e) {}
    })();
  }, []);

  //city,district
  useEffect(() => {
    (async () => {
      try {
        setlistcity(CITY);
        setlistdistrict(DISTRICT);
      } catch (e) {}
    })();
  }, []);
  const setadd = async (code) => {
    const c = listcity.find((item) => item.code === code);
    setcity(c.name);

    const d = DISTRICT.filter((item) => item.parent_code === code);
    setlistdistrict(d);
  };

  const save = async (e) => {
    e.preventDefault();

    const res = await axios.put("users", {
      firstName,
      lastName,
      gender,
      phone,
      email,
      street,
      district,
      city,
      placeOfBirth,
      workingPosition,
      roleId,
    });
    setVisible(true);

    //alert("done.");
    //console.log({ res });
  };

  return (
    <>
      <CAlert
        className="container"
        color="primary"
        dismissible
        visible={visible}
        onClose={() => setVisible(false)}
      >
        Success!
      </CAlert>
      <div className="container rounded bg-white mt-0 mb-0">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">
                <b>{profile.displayName}</b>
              </span>
              <span className="text-black-50">{email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-right">
                  <b>Profile Settings</b>
                </h2>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <b>FirstName</b>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <b>LastName</b>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12">
                  <b>DateOfBirth</b>
                  <input
                    type="date"
                    className="form-control"
                    value={dateOfBirth}
                    onChange={(e) => setdateOfBirth(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <b>Gender</b>
                  <CFormSelect
                    value={gender}
                    onChange={(e) => setgender(e.target.value)}
                  >
                    <option value={true}>Male</option>
                    <option value={false}>Female</option>
                  </CFormSelect>
                </div>
                <div className="col-md-12">
                  <b>Phone</b>
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <b>Email</b>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <b>PlaceOfBirth</b>
                  <input
                    type="text"
                    className="form-control"
                    value={placeOfBirth}
                    onChange={(e) => setplaceOfBirth(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <b>Street</b>
                  <input
                    type="text"
                    className="form-control"
                    value={street}
                    onChange={(e) => setstreet(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <b>District</b>
                  <CFormSelect
                    value={district}
                    onChange={(e) => setdistrict(e.target.value)}
                  >
                    {listdistrict.map((item) => (
                      <option value={item.name} label={item.name}></option>
                    ))}
                  </CFormSelect>
                </div>
                <div className="col-md-12">
                  <b>City</b>
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

              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={save}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};
export default Profile;