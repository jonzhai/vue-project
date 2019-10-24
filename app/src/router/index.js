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
        }
    ]
}
export default new vueRouter(routes)