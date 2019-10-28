<template>
    <div class="login">
        <c-header></c-header>
        <div class="form">
            <div class="cell username-container">
                <input type="text" v-model="username" class="username">
                <i class="fa fa-times"></i>
            </div>
            <div class="cell">
                <input type="password" v-model="password">
                <span>忘记密码</span>
            </div>
        </div>
    </div>
</template>
<script>
import cHeader from '@/components/cHeader'
export default {
    components: {
        cHeader
    },
    data() {
        return {
           username: '',
           password: ''
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
            height: 50px;
            &.username-container{
                .fa{
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
        }
    }
</style>