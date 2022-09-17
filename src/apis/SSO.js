import request from '@/utils/request';

const commonUrl = 'sso'

const login = async (params) => {
    return await request.post(`${commonUrl}/login}`, params)
}

export default {
    login
}