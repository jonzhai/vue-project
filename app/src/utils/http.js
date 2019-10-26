import Axios from 'axios'
let instance = Axios.create({
    baseURL: '/api',
    timeout: 5000,
    // baseURL: 'https://api.example.com',
    headers: {
      'content-type': 'application/json'
    }
  })
  // http request 拦截器
instance.interceptors.request.use(
    config => {
      // if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      //   config.headers.authorization = '666'  //请求头加上token
      // }
      return config
    })
    // http response 拦截器
instance.interceptors.response.use(
    response => {
      //拦截响应，做统一处理 
    //   if (response.data.code) {
    //     switch (response.data.code) {
    //       case 1002:
    //         store.state.isLogin = false
    //         router.replace({
    //           path: 'login',
    //           query: {
    //             redirect: router.currentRoute.fullPath
    //           }
    //         })
    //     }
    //   }
      return response
    })

    export default instance