import axios from "axios";
import { useState, useEffect } from "react";
import CITY from "../vn/CITY.json";
import DISTRICT from "../vn/DISTRICT.json";
import { CFormSelect } from "@coreui/react";

const FootballPitchDetail = () => {
  const token = localStorage.getItem("access_token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const [listcity, setlistcity] = useState([]);
  const [listdistrict, setlistdistrict] = useState([]);
  const [footballPitchName, setfootballPitchName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setaddress] = useState("");
  const [district, setdistrict] = useState("");
  const [city, setcity] = useState("");
  const [roleId, setroleId] = useState(3);
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

  return (
    <>
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
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Image</b>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Phone</b>
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Address</b>
                  </td>
                  <td>
                    <input type="text" />
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
              </div>
              <table className="table table-bordered">
                <thead>
                  <th>UserName</th>
                  <th>DisplayName</th>
                  <th>Phone</th>
                </thead>
                <tbody></tbody>
              </table>
            </td>
          </tr>

          <div className="text-center mt-2">
            <button className="btn btn-primary">Save</button>
          </div>
        </table>
      </div>
    </>
  );
};
export default FootballPitchDetail;
