<template>
    <aside class="app-aside">
        <ul>
            <li v-for="(item, index) in dish_kinds"
                :class="{'active' : activeIndex == index}"
                @click="">
                <a href="#" @click.prevent.stop="setActiveIndex(index)">{{item.name}}</a>
            </li>
        </ul>
    </aside>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'app-category',
    computed: mapState(['dish_kinds', 'activeIndex']),
    methods: {
        ...mapActions([
            'setActive',
        ]),
        setActiveIndex(index) {
            this.setActive(index);
        },
    }
}
</script>
<style lang="less" scoped>
    .app-aside{
        width: 4rem;
        overflow: hidden;
        font-size: .6rem;
        background: #f5f5f5;
        text-align: center;
        position: fixed;
        top: 2rem;
        left: 0;
        bottom: 0;
        ul {
            .active{
                border-left: 3px solid #4ea5ad;
                background: #fff;
            }
            li {
                border-left: 3px solid #f5f5f5;
                height:2.4rem;
                line-height: 2.4rem;
                a{ 
                    color: #666;
                }
            }
        }
    }
</style>