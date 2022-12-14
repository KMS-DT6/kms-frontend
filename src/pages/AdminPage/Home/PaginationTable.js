import React, { useMemo } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter,
} from "react-table";
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
import { Link } from "react-router-dom";

import { COLUMNS } from "./columns";

import axios from "axios";
import { useState, useEffect } from "react";
import CITY from "../../vn/CITY.json";
import DISTRICT from "../../vn/DISTRICT.json";
import { GlobalFilter } from "./GlobalFilter";

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [listPitch, setlistPitch] = useState([]);
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const [footballPitchName, setfootballPitchName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setaddress] = useState("");
  const [image, setimage] = useState("");
  const [district, setdistrict] = useState("");
  const [city, setcity] = useState("");
  const [roleId, setroleId] = useState(0);
  const [visible, setVisible] = useState(false);
  const [listcity, setlistcity] = useState([]);
  const [listdistrict, setlistdistrict] = useState([]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you want to delete?")) {
      const res = await axios.delete(
        `http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/football-pitches/${id}`
      );
      //console.log(res);
      setlistPitch(listPitch.filter((item) => item.footballPitchId !== id));
      //window.location.reload();
      //setVisible(true);
    }
  };
  const handleCreate = async () => {
    const res = await axios.post(
      "http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/football-pitches",
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
    setlistPitch([
      ...listPitch,
      {
        footballPitchId: res.data.data.id,
        footballPitchName,
        phoneNumber,
        image,
        address: {
          address,
          district,
          city,
        },
      },
    ]);
    setVisible(false);
    window.alert("Done.");
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://kmsbackend-env.eba-vjukkhfp.us-east-1.elasticbeanstalk.com/api/football-pitches"
        );
        // console.log({ data });
        setlistPitch(data.data.items);
        console.log(data.data.items);
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

  const data = useMemo(() => listPitch, [listPitch]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,

    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },

    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  return (
    <>
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>Create FootballPitch</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <table className="table">
            <tr>
              <td>
                <b>FootballPitchName</b>
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => setfootballPitchName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Image</b>
              </td>
              <td>
                <input type="text" onChange={(e) => setimage(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <b>Phone</b>
              </td>
              <td>
                <input
                  type="text"
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
          <div className="mt-5 text-center">
            <button
              className="btn btn-primary "
              onClick={(e) => handleCreate()}
            >
              Create
            </button>
          </div>
        </CModalBody>
      </CModal>
      <div>
        <div className="table-title mt-3">
          <div className="row">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
              <Link onClick={(e) => setVisible(true)}>
                <button className="btn btn-primary" type="button">
                  Create
                </button>
              </Link>
            </div>
          </div>
        </div>
        <table className="table table-bordered " {...getTableProps()}>
          <thead style={{ background: "#ddd", color: "#4985B2" }}>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}

                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ????"
                          : " ????"
                        : ""}
                    </span>

                    {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
                  </th>
                ))}

                <th>Actions</th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                  <td>
                    <Link
                      to={`/admin/footballpitchdetail/${row.original.footballPitchId}`}
                      className="edit"
                      title="S???a"
                      cshools-toggle="tooltip"
                    >
                      <i className="material-icons">&#xE254;</i>
                    </Link>
                    <Link
                      onClick={() => handleDelete(row.original.footballPitchId)}
                      className="delete"
                      title="X??a"
                      cshools-toggle="tooltip"
                    >
                      <i className="material-icons">&#xE872;</i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          {/* <button
            className="btn"
            style={{ width: "30px" }}
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </button>

          <button
            className="btn"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>

          <button
            className="btn"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>

          <span>
            <button
              className="btn"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </span> */}
          <span>
            Page
            <strong>
              {pageIndex + 1} / {pageOptions.length}
            </strong>
          </span>
          <span>
            | Go to page:
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{ width: "50px" }}
            />
          </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[5, 10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
