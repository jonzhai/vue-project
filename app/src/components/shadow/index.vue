<template>
    <div id="shadow-wrapper" :class="{'dark-bg': darkBg}">
        <slot />    
    </div>
</template>
<script>
export default {
    props: {
        darkBg: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
    #shadow-wrapper{
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
        &.dark-bg{
            background-color: rgba(0,0,0,0.5);
        }
    }
</style>