import request from '@/utils/request'

/**
 * 获取头部所有分类
 * @return
 */
export const findAllCategories = () => {
  return request('/home/category/head', 'get')
}

/**
 *
 * @param {String} id 当前顶级类目的 id
 * @returns 顶级类目下的分目录内容
 */
export const findTopCategories = (id) => {
  return request('/category', 'get', { id })
}

/**
 *
 * @param {String} id 当前顶级类目的 id
 * @returns 顶级类目下的分目录内容
 */
export const findSubCategoryFilter = (id) => {
  return request('/category/sub/filter', 'get', { id })
}
