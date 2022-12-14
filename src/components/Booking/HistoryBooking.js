import React, { useMemo, useState, useEffect } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import BookingAPI from "../../api/BookingAPI";
import strftime from "strftime";
function HistoryBooking() {
    const [startdate, setstartdate] = useState("");
    const [enddate, setenddate] = useState("")
    const [name, setname] = useState('')
    const [historyBookingdata, sethistoryBookingdata] = useState([])
    const [isPaid, setisPaid] = useState(true)
    console.log(isPaid)
    const handleDelete = async (id) => {
        try {
            console.log(id)
            const token = sessionStorage.getItem('token')
            console.log(token);
            const resData = await BookingAPI.DeleteHistoryBooking(id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            })
            console.log(resData);
            // setListOtherService(resData?.data?.items);
        } catch (error) {
            console.log(error)
        }
        // getListSubFootballPitch(null);
    }
    const ListhistoryBookingdata = async (ValueSubmit) => {

        try {
            const token = sessionStorage.getItem('token')
            console.log(token);
            const HistoryBookingdata = await BookingAPI.HistoryBooking({
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: { ...ValueSubmit }
            })
            sethistoryBookingdata(HistoryBookingdata.data.items)
            console.log()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const ValueSubmit =
        {
            footballPitchName: name,
            fromDate: startdate,
            toDate: enddate,
            isPaid: isPaid
        }
        console.log(ValueSubmit);
        ListhistoryBookingdata(ValueSubmit)

    }, [name, startdate, enddate, isPaid])
    return (
        <><div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <table className="table">
                <tbody><tr>
                    <td>
                        <b>From date</b>
                        <input type="date" onChange={e => setstartdate(e.target.value)} />;
                    </td>
                    <td>
                        <b>To date</b>
                        <input type="date" onChange={e => setenddate(e.target.value)} />;
                    </td>
                    <td>
                        <b>Name </b>
                        <input type="text" onChange={e => setname(e.target.value)} />
                    </td>
                    <td>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked={isPaid} onChange={() => setisPaid(!isPaid)} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b>???? thanh to??n</b></label>
                        </div>

                    </td>
                </tr></tbody></table>
            <div className="row">
                <h2><span className='spanHe'>History booking </span></h2>
                <div className="col-lg-18">
                    <div className="main-box clearfix">
                        <div className="table-responsive">
                            <table className="table user-list">
                                <thead>
                                    <tr>
                                        <th><span>Name</span></th>
                                        <th><span>Size</span></th>
                                        <th><span>Date </span></th>
                                        <th><span>Time </span></th>
                                        <th><span>Price pitch </span></th>
                                        <th><span>Price service </span></th>
                                        <th><span>Total</span></th>
                                        <th><span>Status</span></th>
                                        <th><span></span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {historyBookingdata.map((item, index) => {

                                        return (<tr key={index}>
                                            <td>{item.footballPitch.footballPitchName}</td>
                                            <td>{item.footballPitch.subFootballPitchName}</td>
                                            <td>{item.bookDate}</td>
                                            <td>{item.timeStart + "-" + item.timeEnd}</td>
                                            <td>{item.pricePitch}</td>
                                            <td>{item.otherService.totalPriceOtherService}</td>
                                            <td>{item.totalPriceIncludeService}</td>
                                            <td>{item.status}</td>
                                            {item.status == 'Waiting' ? <td>
                                                <a onClick={() => { handleDelete(item.bookingId) }} className="table-link danger">
                                                    <span className="fa-stack">
                                                        <i className="fa fa-square fa-stack-2x" />
                                                        <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                                                    </span>
                                                </a>
                                                <a onClick={() => {  }} className="table-link">
                                                    <span className="fa-stack">
                                                        <i className="fa fa-square fa-stack-2x" />
                                                        <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                                                    </span>
                                                </a>
                                            </td>
                                                : <td></td>}

                                        </tr>)
                                    }
                                    )}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </>)
}
export default HistoryBooking;