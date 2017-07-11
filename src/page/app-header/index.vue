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
    h1{
        height: 44px;
        background: #4ea5ad;
        text-align: center;
        font-size: 18px;
        line-height: 44px;
        color: #fff;
    }
</style>