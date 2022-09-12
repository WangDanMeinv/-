import request from './index'
// 转字符串类型吧
import qs from 'qs'
//获取详情页信息
export const GoodDetailsAPI =(id)=>request.get(`/bookshop/shopList/${id}`)