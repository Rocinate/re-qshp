import request from '@/utils/request';

const commonUrl = 'sso'

const login = (params) => {
    return request.post(`${commonUrl}/login}`, params)
}

export default {
    login
}