<template>
    <h1>{{shops.shopname}}</h1>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'header',
    components: {
        
    },
    computed: mapState(['shops']),
    created(){
        
    }
}
</script>
<style lang="less" scoped>
    @import url('../../style/bluestyle.less');
    h1{
        height: 2rem;
        background: @base-color;
        text-align: center;
        font-size: .7rem;
        line-height: 2rem;
        color: #fff;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 4;
    }
</style>