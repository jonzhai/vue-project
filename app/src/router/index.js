import vueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(vueRouter)
const routes = {
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/pages/home/')
        },
        {
            path: '/login',
            component: () => import('@/pages/author/login')
        },
    ]
}
export default new vueRouter(routes)