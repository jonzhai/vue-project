import Axios from 'axios'
let instance = Axios.create({
    timeout: 5000,
    // baseURL: 'https://api.example.com',
    headers: {
      'content-type': 'application/json'
    }
  })
  // http request 拦截器
instance.interceptors.request.use(
    config => {
      if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.authorization = '666'  //请求头加上token
      }
      return config
    },
    err => {
      return Promise.reject(err)
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
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
      return Promise.reject(error.response) // 返回接口返回的错误信息
    })

    export default instance