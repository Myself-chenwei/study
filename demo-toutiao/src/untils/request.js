import axios from 'axios'
// 创建一个实例 axios.create()
const request = axios.create({
  baseURL: 'https://www.escook.cn'
})

export default request
