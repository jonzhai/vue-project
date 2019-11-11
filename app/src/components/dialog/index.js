import Vue from 'vue'
import DialogComponent from './index.vue'
export default class Dialog {
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
                    render: h => h(DialogComponent, {
                        props: {
                            type: this.type
                        },
                        on: {
                            close(tag) {
                                document.body.removeChild(document.body.querySelector('#shadow-wrapper'))
                                if (tag === true) {
                                    resolve()
                                } else {
                                    reject()
                                }
                            }
                        }
                    })
                })
            }, 20)
        })
    }
}