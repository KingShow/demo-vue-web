<template>
    <div class="app-dishs">
        <section v-for="(item, index) in dishs" data-id="item.id">
            <ul>
                <li v-for="(it, i) in dishs.data">{{it.name}}</li> 
            </ul>
        </section>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'app-dishs',
    computed: mapState(['dishs', 'activeIndex', 'newDishs']),
    methods: {
        ...mapActions([
            'initDishs',
        ]),
        dishs() {
            let dishs = [];
            Object.keys(newDishs).forEach((item, i) => {
                dishs.push({
                    id: item,
                    data: newDishs[item],
                })
            })
            return dishs;
        }
    },
    created(){
        this.initDishs();
    },
}
</script>
<style lang="less" scoped>
    
</style>