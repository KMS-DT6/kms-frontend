import http from './http'

const otherServiceApi = {
    getListOtherService(config) {
        return http.get('/other-services', config)
    },
    getOtherServiceById(id, config) {
        return http.get(`/other-services/${id}`, config)
    },
    createOtherService(data, config) {
        return http.post('/other-services', data, config)
    },
    updateOtherService(data, config) {
        return http.put(`/other-services/${data.id}`, data, config)
    },
    deleteOtherService(id, config) {
        return http.delete(`/other-services/${id}`,null, config)
    }
}
export default otherServiceApi