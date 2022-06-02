import Mock from 'mockjs'
import homeApi from './mockServerData/home.js'

Mock.mock('/home/getData',homeApi.getStatisticalData())