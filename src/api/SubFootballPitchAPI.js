import http from './http'

const SubFootballPitchAPI = {
    getListSubFootballPitch(config) {
        return http.get('/sub-football-pitches', config)
    },
    getSubFootballPitchId(id, config) {
        return http.get(`/sub-football-pitches/${id}`, config)
    },
    createSubFootballPitch(data, config) {
        return http.post('/sub-football-pitches', data, config)
    },
    updateSubFootballPitch(data, config) {
        return http.put(`/sub-football-pitches/${data.id}`, data, config)
    },
    deleteSubFootballPitch(id, config) {
        return http.delete(`/sub-football-pitches/${id}`,null, config)
    }
}
export default SubFootballPitchAPI