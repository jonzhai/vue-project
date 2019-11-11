<template>
    <Shadow>
        <div class="loading-content">
            <i class="fa fa-spinner" aria-hidden="true" v-if="type === 0"></i>
            <i class="fa fa-check" aria-hidden="true" v-if="type === 1"></i>
            <div class="loading-text">{{ type === 0 ? 'loading...' : '已完成'}}</div>
        </div>
    </Shadow>
</template>
<script>
export default {
    props: {
        type: {
            type: Number,
            default: 0
        }
    }
}
</script>
<style lang="scss" scoped>
    @keyframes rotate {
        0%{
            transform: rotate(0deg)
        }
        50%{
            transform: rotate(180deg)
        }
        100%{
            transform: rotate(360deg)
        }
    }
    .loading-content{
        height: px2rem(300);
        width: px2rem(300);
        border-radius: px2rem(30);
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .fa{
            @include fontSize(100);
            &.fa-spinner{
                animation: rotate 2s linear infinite;
            }
        }
        .loading-text{
            margin-top: 20px;
        }
    }
</style>