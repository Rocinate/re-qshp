import request from '@/utils/request'

const commonUrl = 'read'

export const getForumList = (params) => {
    return request.get(`${commonUrl}/forum/forum-list`, {params: params})
}

export const getBulletin = (params) => {
    return request.get(`${commonUrl}/forum/bulletin`, {params: params})
}

export const getHotThread = (params) => {
    return request.post(`${commonUrl}/thread/hot`, params)
}