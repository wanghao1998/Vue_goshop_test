﻿/* 包含多个接口的请求函数 */
import ajax from './ajax'

const BASE_URL = '/api'
// [1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情)
export const reqAddress = (geohash) => ajax(BASE_URL + `/position/${geohash}`)
// [2、获取食品分类列表](#2 获取食品分类列表)
export const reqFoodTypes = () => ajax(BASE_URL + '/index_category')
// [3、根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)
export const reqShops = (latitude, longitude) => ajax(BASE_URL + '/shops', {latitude, longitude})
// [4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)
export const reqSearchShops = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword})
// [5、获取一次性验证码](#5 获取一次性验证码)
export const reqCaptcha = () => ajax(BASE_URL + '/captcha')
// [6、用户名密码登陆](#6 用户名密码登陆)<br/>
export const reqLoginPwd = (name, pwd, captcha) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')
// [7、发送短信验证码](#7 发送短信验证码)<br/>
export const reqSendcode = (phone) => ajax(BASE_URL + '/sendcode', {phone})
// [8、手机号验证码登陆](#8 手机号验证码登陆)<br/>
export const reqLoginSms = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code})
// [9、根据会话获取用户信息](#9 根据会话获取用户信息)<br/>
export const reqUserinfo = () => ajax(BASE_URL + '/userinfo')
// [10、用户登出](#10 用户登出)
export const LoginOut = () => ajax(BASE_URL + '/logout')
