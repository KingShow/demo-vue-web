<template>
    <aside class="app-aside">
        <ul>
            <li v-for="(item, index) in dish_kinds"
                :class="{'active' : activeIndex == index}">
                <a href="#" @click.prevent.stop="setActiveIndex(index)">{{item.name}}</a>
            </li>
        </ul>
    </aside>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'app-category',
    computed: mapState(['dish_kinds', 'activeIndex']),
    methods: {
        setActiveIndex(index) {
            console.log(index, 'index');
        },
    }
}
</script>
<style lang="less" scoped>
    .app-aside{
        width: 88px;
        overflow: hidden;
        font-size: 14px;
        background: #f5f5f5;
        text-align: center;
        ul {
            .active{
                border-left: 3px solid #4ea5ad;
                background: #fff;
            }
            li {
                border-left: 3px solid #f5f5f5;
                height:56px;
                line-height: 56px;
                a{ 
                    color: #666;
                }
            }
        }
    }
</style>