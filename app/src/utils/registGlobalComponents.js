import Shadow from '@/components/shadow'
import Loading from '@/components/loading'
import Dialog from '@/components/dialog'
import Tips from '@/components/tips'

export default {
    install(Vue) {
        Vue.component('Shadow', Shadow)
        Vue.prototype.$loading = (type) => {
            return new Loading(type)
        }
        Vue.prototype.$dialog = () => {
            return new Dialog()
        }
        Vue.prototype.$tips = (msg, type) => {
            return new Tips(msg, type)
        }
    }
}