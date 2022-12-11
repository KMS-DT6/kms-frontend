import axios from "axios";
import { useState, useEffect } from "react";
import CITY from "../vn/CITY.json";
import DISTRICT from "../vn/DISTRICT.json";
import { CFormSelect } from "@coreui/react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

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
  const [roleId, setroleId] = useState(3);

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
                    <input type="text" value={footballPitchName} />
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
                      <input type="text" value={image} />
                    </tr>
                    {/* <img src={image}></img> */}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Phone</b>
                  </td>
                  <td>
                    <input type="text" value={phoneNumber} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Address</b>
                  </td>
                  <td>
                    <input type="text" value={address} />
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
