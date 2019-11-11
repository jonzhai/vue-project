<template>
    <Shadow :dark-bg="false">
        <div class="tips-wrapper">
            <div class="tips-content" :class="{
                success: type === 'Success',
                error: type === 'Error',
                warning: type === 'Warn',
                info: type === 'Info',
            }">{{ msg }}</div>
        </div>
    </Shadow>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'Success'
        },
        msg: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.tips-wrapper{
    position: absolute;
    top: px2rem(20);
    left: 0;
    width: 100%;
    padding: 0 px2rem(20);
    box-sizing: border-box;
    .tips-content{
        box-sizing: border-box;
        height: px2rem(88);
        border-radius:  px2rem(10);
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        &.success{
            background-color: #07C160;
        }
        &.error{
            background-color:#FA5151;
        }
        &.warning{
            background-color:#E6A23C;
        }
        &.info{
            background-color:#909399;
        }
    }
}
</style>