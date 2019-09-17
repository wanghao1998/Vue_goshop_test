/* 间接更新state */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

import {reqAddress, reqFoodTypes, reqShops} from '../api/index'
export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    // 发送ajax请求

    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 在异步获取食品分类
  async getFoodCategorys ({commit}) {
    // 发送ajax请求
    const result = await reqFoodTypes()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  // 异步获取商家列表
  async getSHOPS ({commit, state}) {
    // 发送ajax请求
    const result = await reqShops(state.latitude, state.longitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }
}
