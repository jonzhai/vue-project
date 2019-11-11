<template>
    <div class="login">
        <c-header></c-header>
        <div class="form">
            <div class="cell username-container">
                <input type="text" v-model="username" class="username">
                <i class="fa fa-times" v-show="username.length > 0"></i>
            </div>
            <div class="cell pass-container">
                <input type="password" v-model="password">
            </div>
            <div class="cell option-container">
                <span>注册新用户</span>
                <span>忘记密码</span>
            </div>
            <div class="cell submit-container">
                <span 
                    class="login-btn"
                    @click="login"
                >
                    登陆
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import cHeader from '@/components/cHeader'
import {Login} from '@/api/author'
export default {
    components: {
        cHeader
    },
    data() {
        return {
           username: '',
           password: ''
        }
    },
    mounted() {
       
        // setTimeout(() => {
        //     loading.close()
        // }, 3000)
    },
    methods: {
        login() {
          let loading =  this.$loading(1)
          loading.open().then(() => {
              Login({
                  username: this.username,
                  password: this.password
              }).then(odata => {
                //   loading.close()
                  console.log(odata)
              })
          })
        }
    }
}
</script>
<style lang="scss" scoped>
    .login{
        padding: 0 px2rem(10);
        .form{
            margin-top: px2rem(50);
        }
        .cell{
            position: relative;
            height: px2rem(50);
            padding: 0 px2rem(30);
            input{
                border: 1px solid #999;
                padding: 0 10px;
            }
            &.username-container{
                margin-bottom: px2rem(30);
                .fa{
                    position: absolute;
                    right: px2rem(40);
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
            &.pass-container{
                margin-bottom: px2rem(10);
            }
            &.option-container{
                display: flex;
                justify-content: space-between;
            }
            &.submit-container{
                height: px2rem(80);
                .login-btn{
                    display: flex;
                    height: 100%;
                    background-color: $primary;
                    justify-content: center;
                    align-items: center;
                    @include fontSize(32)
               }
            }
        }
    }
</style>