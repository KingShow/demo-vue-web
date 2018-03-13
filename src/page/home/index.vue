<template>
  	<div class="home_container">
        <AppHeader></AppHeader>
        <div class="content">
            <AppCategory></AppCategory>
            <AppDishs></AppDishs>
        </div>
    </div>
</template>

<script>
import AppHeader from '../app-header'
import AppCategory from '../app-category'
import AppDishs from '../app-dishs'

export default {
	name: 'home',
  	components: {
  		AppHeader,
      AppCategory,
      AppDishs,
  	},
    created(){
        
    }
}
</script>

<style lang="less" scoped>
    .home_container{
      .content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
</style>
