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
    const [isPaid,setisPaid]=useState(true)
    console.log(isPaid)
    useEffect(() => {
        const ValueSubmit =
        {
            footballPitchName: name,
            fromDate: startdate,
            toDate: enddate,
            status: true,
            isPaid: isPaid
        }
        console.log(ValueSubmit);
        (async () => {
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
        })()

    }, [name, startdate, enddate,isPaid])
    return (
        <>
            <table className="table">
                <tbody><tr>
                    <td>
                        <b>Từ Ngày</b>
                        <input type="date" onChange={e => setstartdate(e.target.value)} />;
                    </td>
                    <td>
                        <b>Đến  Ngày</b>
                        <input type="date" onChange={e => setenddate(e.target.value)} />;
                    </td>
                    <td>
                        <b>Tên sân </b>
                        <input type="text" onChange={e => setname(e.target.value)} />
                    </td>
                    <td>
                        <div className="form-check form-switch">
                            <input className="form-check-input"  type="checkbox" id="flexSwitchCheckDefault"  defaultChecked={isPaid} onChange={()=>setisPaid(!isPaid)}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b>Đã thanh toán</b></label>
                        </div>

                    </td>
                </tr></tbody></table>
            <div className="row">
                <h2><span className='spanHe'>lịch sử đặt sân </span></h2>
                <div className="col-lg-18">
                    <div className="main-box clearfix">
                        <div className="table-responsive">
                            <table className="table user-list">
                                <thead>
                                    <tr>
                                        <th><span>Tên sân</span></th>
                                        <th><span>Loại</span></th>
                                        <th><span>Ngày đặt </span></th>
                                        <th><span>Thời gian đặt </span></th>
                                        <th><span>giá sân </span></th>
                                        <th><span>giá dịch vụ </span></th>
                                        <th><span>tổng tiền</span></th>
                                        <th><span>trạng thái </span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {historyBookingdata.map((item, index) => {
                                        let Paid = ''
                                        if (item.isPaid) {
                                            Paid = 'Đã thanh toán'
                                        }
                                        else {
                                            Paid = 'Chưa thanh toán'
                                        }
                                        return (<tr key={index}>
                                            <td>{item.footballPitch.footballPitchName}</td>
                                            <td>{item.footballPitch.subFootballPitchName}</td>
                                            <td>{item.bookDate}</td>
                                            <td>{item.timeStart + "-" + item.timeEnd}</td>
                                            <td>{item.pricePitch}</td>
                                            <td>{item.otherService.totalPriceOtherService}</td>
                                            <td>{item.totalPriceIncludeService}</td>
                                            <td>{Paid}</td>
                                        </tr>)
                                    }
                                    )}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>



        </>)
}
export default HistoryBooking;