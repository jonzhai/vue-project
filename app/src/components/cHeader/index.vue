<template>
    <div class="common-header">
        <div class="header-left" @click="back">
            <i class="fa fa-angle-left"></i>
        </div>
        <div class="header-right">
            <i class="fa fa-home" @click="home"></i>
        </div>
        <div class="header-middle">京东登陆注册</div>
    </div>
</template>
<script>
export default {
    methods: {
        back() {
            this.$router.back()
        },
        home() {
            this.$router.push({path: '/home'})
        }
    }
}
</script>
<style lang="scss" scoped>
    .common-header{
        height: px2rem(88);
        position: relative;
        .fa{
            @include fontSize(48);
        }
        .header-left, .header-right{
            position: absolute;
            top: 0;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            &.header-left{
                left: 10px;
            }
            &.header-right{
                right: 10px;
            }
        }
        .header-middle{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            @include fontSize(36);
        }
    }
</style>