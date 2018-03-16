<template>
    <div class="order_container">
        <AppOrder></AppOrder>
        
    </div>
</template>

<script>
import AppOrder from '../app-order'

export default {
    name: 'order',
    components: {
        AppOrder,
    },
    created(){
        
    }
}
</script>

<style lang="less" scoped>
    .order_container{
      .content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
</style>