import request from '@/utils/request';

const commonUrl = 'info'

const login = (params) => {
    return request.get(`${commonUrl/login}`, {params: params})
}

const user = (params) => {
    return request.get(`${commonUrl/user}`, {params: params})
}

export default {
    login,
    user
}