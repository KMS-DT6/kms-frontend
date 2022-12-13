import http from './http'

const registerApi = {
    register(data, config) {
        return http.post('/customer/register', data, config)
    }
}
export default registerApi