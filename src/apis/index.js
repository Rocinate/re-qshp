// 论坛版块列表
export const getClassList = () => fetch('/api/common/forum').then(res=>res.json());
// 公告列表
export const getNoticeList = () => fetch('/api/common/bulletin').then(res => res.json());
// 获取帖子列表
export const getList = () => fetch('/api/thread/list?' + new URLSearchParams({
  'forum_id': 0,
  'list_type': 1,
  'page': 1,
  'page_size': 20
}))
