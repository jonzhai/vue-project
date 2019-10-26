<template>
    <div>ewrewr</div>
</template>
<script>
import { Login } from  '@/api/author'
export default {
    created() {
        this._login()
    },
    methods: {
        _login() {
            Login({
                username: '666',
                password: '2131'
            }).then(oData => {
                console.log(oData)
            })
        }
    }
}
</script>