<template>
    <div class="app-dishs">
        <section v-for="(item, index) in dish_kinds">
            <ul>
                <li v-for="(it, i) in newDishs[item.id]">
                    <img src="{it.dishimg}" alt="">
                    <p>{{it.name}}</p>
                    <p>{{it.norms[0].price}}</p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'app-dishs',
    computed: mapState(['newDishs', 'activeIndex', 'dish_kinds']),
    data() {
        return {
            dishes: [],
        }
    },
    methods: {
        ...mapActions([
            'initDishs',
        ]),
    },
    created(){
        this.initDishs();
    },
}
</script>
<style lang="less" scoped>
    .app-dishs{
        position: absolute;
        left: 88px;
        top: 44px;
    }
</style>