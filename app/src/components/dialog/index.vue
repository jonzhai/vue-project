<template>
    <Shadow :dark-bg="true">
        <div class="dialog-wrapper">
            <div class="dialog-head">弹窗标题</div>
            <div class="dialog-body">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
            <div class="dialog-foot">
                <div class="left-btn" @click="$emit('close')">辅助操作</div>
                <div class="right-btn" @click="$emit('close', true)">主操作</div>
            </div>
        </div>
    </Shadow>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.dialog-wrapper{
    background: white;
    width: px2rem(640);
    height: px2rem(416);
    padding-top: px2rem(64);
    display: flex;
    flex-direction: column;
    border-radius: px2rem(20);
    box-sizing: border-box;
    .dialog-head {
        padding: 0  px2rem(48)  px2rem(32);
        font-weight: 700;
        @include fontSize(34);
    }
    .dialog-body {
        flex: 1;
        padding: 0 px2rem(48);
         @include fontSize(34);
         color: rgba(0,0,0,0.5);
    }
    .dialog-foot {
        height: px2rem(108);
        display: flex;
        >div{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            @include fontSize(34);
            font-weight: 700;
            &.right-btn{
                color: #576B95;
            }
        }
    }
}
</style>