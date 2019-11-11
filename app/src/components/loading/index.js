import Vue from 'vue'
import LoadingComponent from './loading.vue'
export default class Loading {
    constructor(type) {
        this.ele = null
        this.type = type
    }
    open() {
        return new Promise((resolve, reject) => {
            this.ele = document.createElement('div')
            document.body.appendChild(this.ele)
            setTimeout(() => {
                new Vue({
                    el: this.ele,
                    render: h => h(LoadingComponent, {
                        props: {
                            type: this.type
                        }
                    })
                })
                resolve()
            }, 20)
        })
    }
    close() {
        document.body.removeChild(document.body.querySelector('#shadow-wrapper'))
        this.ele = null
    }
}