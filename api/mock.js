import Mock from 'mockjs'
import homeApi from './mockServerData/home.js'
import userApi from './mockServerData/user.js'
import permissionApi from './mockServerData/permission.js'

Mock.mock('/home/getData',homeApi.getStatisticalData())
Mock.mock(/user\/add/,'post',userApi.createUser)
Mock.mock(/user\/edit/,'post',userApi.updateUser)
Mock.mock(/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/user\/del/,'get',userApi.deleteUser)
Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)
