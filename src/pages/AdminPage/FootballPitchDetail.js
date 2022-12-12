import axios from "axios";
import { useState, useEffect } from "react";
import CITY from "../vn/CITY.json";
import DISTRICT from "../vn/DISTRICT.json";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
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

const FootballPitchDetail = () => {
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const [listcity, setlistcity] = useState([]);
  const [listdistrict, setlistdistrict] = useState([]);
  const [footballPitchName, setfootballPitchName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setaddress] = useState("");
  const [image, setimage] = useState("");
  const [district, setdistrict] = useState("");
  const [city, setcity] = useState("");
  const [listaccount, setlistaccount] = useState([]);

  const [visible, setVisible] = useState(false);
  const [title, settitle] = useState(true);

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [add, setaddd] = useState("");
  const [dis, setdis] = useState("");
  const [ci, setci] = useState("");
  const [accountid, setaccountid] = useState(0);
  const [phone, setphone] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/football-pitches/${id}`
        );
        console.log({ data });
        setfootballPitchName(data.data.footballPitchName);
        setimage(data.data.image);
        setphoneNumber(data.data.phoneNumber);
        setaddress(data.data.address.address);
        setdistrict(data.data.address.district);
        setcity(data.data.address.city);
      } catch (e) {}
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/football-pitch-admins?footballPitchId=${id}`
        );
        console.log({ data });
        setlistaccount(data.data.items);
      } catch (e) {}
    })();
  }, []);
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
    setci(c.name);

    const d = DISTRICT.filter((item) => item.parent_code === code);
    setlistdistrict(d);
  };
  const handleUpdate = async () => {
    const res = await axios.put(
      `http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/football-pitches/${id}`,
      {
        footballPitchName,
        phoneNumber,
        image,
        address,
        district,
        city,
      }
    );
    console.log(res);
  };
  const handleDelete = async (id) => {
    const res = await axios.delete(
      `http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/football-pitch-admins/${id}`
    );
    console.log(res);
    setlistaccount(listaccount.filter((item) => item.id !== id));
    //window.location.reload();
  };
  const getaccount = async (id) => {
    const res = await axios.get(
      `http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/football-pitch-admins/${id}`
    );
    console.log(res);
    setusername(res.data.data.username);
    setpassword(res.data.data.password);
    setfirstName(res.data.data.firstName);
    setlastName(res.data.data.lastName);
    setaddd(res.data.data.address.address);
    setdis(res.data.data.address.district);
    setci(res.data.data.address.city);
    setphone(res.data.data.phoneNumber);
  };
  const handleSave = async () => {
    if (title) {
      const res = await axios.post(
        "http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/football-pitch-admins",
        {
          footballPitchId: id,
          username,
          firstName,
          lastName,
          password,

          address: add,
          district: dis,
          city: ci,

          phoneNumber: phone,
        }
      );
      console.log(res);
      setlistaccount([
        ...listaccount,
        {
          footballPitchId: id,
          username,
          firstName,
          lastName,
          password,

          address: add,
          district: dis,
          city: ci,

          phoneNumber: phone,
        },
      ]);
    } else {
      const res = await axios.put(
        `http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/football-pitch-admins/${accountid}`,
        {
          footballPitchId: id,
          username,
          firstName,
          lastName,
          password,

          address: add,
          district: dis,
          city: ci,

          phoneNumber: phone,
        }
      );
      console.log(res);
      setVisible(false);
    }
  };
  return (
    <>
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>
            {title ? "Create Account" : "Update Account"}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <table className="table table-bordered">
            <tr>
              <td>
                <b>FirstName</b>
              </td>
              <td>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>LastName</b>
              </td>
              <td>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>UserName</b>
              </td>
              <td>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>PassWord</b>
              </td>
              <td>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Phone</b>
              </td>
              <td>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Address</b>
              </td>
              <td>
                <input
                  type="text"
                  value={add}
                  onChange={(e) => setaddd(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>District</b>
              </td>
              <td>
                <CFormSelect
                  value={dis}
                  onChange={(e) => setdis(e.target.value)}
                >
                  {listdistrict.map((item) => (
                    <option value={item.name} label={item.name}></option>
                  ))}
                </CFormSelect>
              </td>
            </tr>
            <tr>
              <td>
                <b>City</b>
              </td>
              <td>
                <CFormSelect
                  value={listcity.find((item) => item.name === ci)?.code}
                  onChange={(e) => setadd(e.target.value)}
                >
                  {listcity.map((item) => (
                    <option value={item.code} label={item.name}></option>
                  ))}
                </CFormSelect>
              </td>
            </tr>
          </table>
          <div className="mt-5 text-center">
            <button className="btn btn-primary " onClick={(e) => handleSave()}>
              Save
            </button>
          </div>
        </CModalBody>
      </CModal>
      <div className="container bg-white ">
        <table className="table">
          <tr>
            <td style={{ width: "40%" }}>
              <div className="text-center">
                <h4>FootballPitchDetail</h4>
              </div>
              <table className="table">
                <tr>
                  <td>
                    <b>FootballPitchName</b>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={footballPitchName}
                      onChange={(e) => setfootballPitchName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Image</b>
                  </td>
                  <td>
                    <tr>
                      <img
                        src={image}
                        style={{ width: "50px", height: "50px" }}
                        alt="Null"
                      ></img>
                    </tr>
                    <tr>
                      <input
                        type="text"
                        value={image}
                        onChange={(e) => setimage(e.target.value)}
                      />
                    </tr>
                    {/* <img src={image}></img> */}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Phone</b>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setphoneNumber(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Address</b>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>District</b>
                  </td>
                  <td>
                    <CFormSelect
                      value={district}
                      onChange={(e) => setdistrict(e.target.value)}
                    >
                      {listdistrict.map((item) => (
                        <option value={item.name} label={item.name}></option>
                      ))}
                    </CFormSelect>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>City</b>
                  </td>
                  <td>
                    <CFormSelect
                      value={listcity.find((item) => item.name === city)?.code}
                      onChange={(e) => setadd(e.target.value)}
                    >
                      {listcity.map((item) => (
                        <option value={item.code} label={item.name}></option>
                      ))}
                    </CFormSelect>
                  </td>
                </tr>
              </table>
            </td>
            <td style={{ width: "20%" }}></td>

            <td>
              <div className="text-center mt-5">
                <h4>Account</h4>
                <div className="text-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      settitle(true);
                      setVisible(true);
                      setusername("");
                      setpassword("");
                      setfirstName("");
                      setlastName("");
                      setaddd("");
                      setdis("");
                      setci("");
                      setphone("");
                    }}
                  >
                    Create
                  </button>
                </div>
              </div>
              <table className="table table-bordered">
                <thead>
                  <th>UserName</th>
                  <th>DisplayName</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </thead>
                <tbody>
                  {listaccount?.map((item) => (
                    <tr key={item.id}>
                      <td>{item.username}</td>
                      <td>
                        {item.lastName} {item.firstName}
                      </td>
                      <td>{item.phoneNumber}</td>
                      <td>
                        <Link
                          onClick={() => {
                            getaccount(item.id);
                            setaccountid(Number(item.id));
                            settitle(false);
                            setVisible(true);
                          }}
                          className="edit"
                          title="Edit"
                          cshools-toggle="tooltip"
                        >
                          <i className="material-icons">&#xE254;</i>
                        </Link>

                        <Link
                          onClick={() => handleDelete(item.id)}
                          className="delete"
                          title="Delete"
                          cshools-toggle="tooltip"
                        >
                          <i className="material-icons">&#xE872;</i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>

          <div className="text-center mt-2">
            <button className="btn btn-primary" onClick={(e) => handleUpdate()}>
              Save
            </button>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <button className="btn btn-primary" onClick={(e) => navigate(-1)}>
              Cancel
            </button>
          </div>
        </table>
      </div>
    </>
  );
};
export default FootballPitchDetail;
