import http from './http'

const BookingAPI = {
    HistoryBooking( config) {
        return http.get('/my-account/history-booking/', config)
    }
}
export default BookingAPI