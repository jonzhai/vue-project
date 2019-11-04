import Vue from 'vue'
import LoadingComponent from './loading.vue'
export default class Loading {
    constructor() {
        this.ele = null
        this.init()
    }
    init() {
        this.ele = document.createElement('div')
        document.body.appendChild(this.ele)
        setTimeout(() => {
            new Vue({
                el: this.ele,
                render: h => h(LoadingComponent)
            })
        }, 20)
    }
    close() {
        this.ele && document.body.removeChild(document.body.querySelector('#loading-container'))
        this.ele = null
    }
}