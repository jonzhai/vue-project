<template>
    <div id="loading-container">
        <div class="loading-content">
            <i class="fa fa-spinner" aria-hidden="true"></i>
            <div class="loading-text">loading...</div>
        </div>
    </div>
</template>
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
    #loading-container{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
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
                animation: rotate 2s linear infinite;
            }
            .loading-text{
                margin-top: 20px;
            }
        }
    }
</style>