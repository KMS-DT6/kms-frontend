import http from './http'

const BookingAPI = {
    HistoryBooking( config) {
        return http.get('/my-account/history-booking/', config)
    },
    DeleteHistoryBooking(id,config){
        return http.delete(`/booking-pitches/${id}`,null, config)
    }
    
}
export default BookingAPI