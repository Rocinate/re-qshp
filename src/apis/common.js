import request from '@/utils/request'

const commonUrl = 'read'

export const getForumList = (params) => {
    return request.get(`${commonUrl}/forum/forum-list`, {params: params})
}

export const getBulletin = (params) => {
    return request.get(`${commonUrl}/thread/bulletin`, {params: params})
}

export const getHotThread = (params) => {
    return request.post(`${commonUrl}/thread/hot`, params)
}

export const getBBSInfo = (params) => {
    return request.get(`${commonUrl}/forum/bbs-info`)
}