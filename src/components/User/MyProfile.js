import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function MyProfile() {
  const [user, setUser] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");

  const [newPass, setNewPass] = useState("");
  const [cfNewPass, setCfNewPass] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url =
      "http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/my-account";
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    });
    setUser(response?.data?.data?.user);
  };

  const fetchD = async () => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setUserName(user?.username);
    setPhoneNumber(user?.phoneNumber);
    setAddress(user?.address?.address);
    setDistrict(user?.address?.district);
    setCity(user?.address?.city);
  };

  const saveChange = async () => {
    const data = {
      firstName: firstname,
      lastName: lastname,
      username: "admin",
      phoneNumber: phonenumber,
      address: address,
      district: "Lien Chieu",
      city: "Da Nang",
    };
    console.log(data);
    await axios.put(
      "http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/my-account",
      data,
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      }
    );
    window.location.reload();
  };

  const changePass = async () => {
    const data = {
      currentPassword: user?.password,
      newPassword: newPass,
      confirmPassword: cfNewPass,
    };
    console.log(data);
    // await axios.put('http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/my-account/change-password',data,{ headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`}})
    // window.location.reload()
  };

  return (
    <MyProfileCSS>
      <div onLoad={fetchD}>
        <h1 className="text-primary text-center">Profile Settings</h1>
        <br />
        <br />

        <div className="mx-5">
          <div className="row">
            {/* left column */}
            <div className="col-md-3">
              <div className="text-right">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
                {/* <h6>Upload a different photo...</h6>
                              <input type="file" className="form-control" /> */}
              </div>
            </div>

            <div className="col-md-9 personal-info">
              <form className="form-horizontal" role="form">
                <div className="nameLabel">
                  <div className="form-group fn">
                    <label className="">First name:</label>
                    <div className="col-lg-8">
                      <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        defaultValue={user?.firstName}
                      />
                    </div>
                  </div>
                  <div className="form-group ln">
                    <label className="">Last name:</label>
                    <div className="col-lg-8">
                      <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        defaultValue={user?.lastName}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Phone:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      defaultValue={user?.phoneNumber}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Address:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                      defaultValue={user?.address?.address}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">
                    New Password:
                  </label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="password"
                      onChange={(e) => setNewPass(e.target.value)}
                      defaultValue="0123456"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">
                    Confirm new Password:
                  </label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="password"
                      onChange={(e) => setCfNewPass(e.target.value)}
                      defaultValue="0123456"
                    />
                  </div>
                </div>
                {/* <div className="form-group">
                                  <label className="col-lg-3 control-label">Time Zone:</label>
                                  <div className="col-lg-8">
                                      <div className="ui-select">
                                          <select id="user_time_zone" className="form-control">
                                              <option value="Hawaii">(GMT-10:00) Hawaii</option>
                                              <option value="Alaska">(GMT-09:00) Alaska</option>
                                              <option value="Pacific Time (US & Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                                              <option value="Arizona">(GMT-07:00) Arizona</option>
                                              <option value="Mountain Time (US & Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                                              <option value="Central Time (US & Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                                              <option value="Eastern Time (US & Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                                              <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                                          </select>
                                      </div>
                                  </div>
                              </div> */}
                <button
                  type="button"
                  className="btn btn-success btn-block"
                  onClick={saveChange}
                >
                  Save
                </button>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <button
                  type="button"
                  className="btn btn-success btn-block"
                  onClick={changePass}
                >
                  Change password
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </MyProfileCSS>
  );
}

export default MyProfile;

const MyProfileCSS = styled.div`
  input {
    margin-top: 5px;
  }
  button {
    margin-top: 10px;
  }
  margin-left: 240px;
  body {
    margin-top: 20px;
  }

  .nameLabel {
    display: flex;
  }

  .nameLabel .fn {
    width: 40%;
  }
  .nameLabel .ln {
    width: 40%;
  }

  body {
    margin-top: 20px;
  }
  .avatar {
    width: 200px;
    height: 200px;
  }
`;
