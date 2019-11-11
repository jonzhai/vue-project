import Vue from 'vue'
import TipsComponent from './index.vue'
export default class Tips {
    constructor() {
        this.ele = null
        return this.open()
    }
    open() {
        return new Promise((resolve, reject) => {
            this.ele = document.createElement('div')
            document.body.appendChild(this.ele)
            setTimeout(() => {
                new Vue({
                    el: this.ele,
                    render: h => h(TipsComponent, {
                        props: {
                            msg: '666'
                        },
                    })
                })
                setTimeout(() => {
                    this.ele = null
                    document.body.removeChild(document.body.querySelector('#shadow-wrapper'))
                }, 20000)
            }, 20)
        })
    }
}