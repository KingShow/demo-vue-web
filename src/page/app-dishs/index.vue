<template>
    <div class="app-dishs">
        <section v-show="dish_kinds[activeIndex].id == item.id" v-for="(item, index) in dish_kinds" class="dishe-item">
            <h3>{{item.name}}</h3>
            <ul>
                <li v-for="(it, i) in newDishs[item.id]">
                    <img :src="it.dishimg" alt="" width="100%" height="140" class="dishe-img">
                    <p class="dish-name">{{it.name}}</p>
                    <p class="dish-price">
                        <span class="price">¥{{it.norms[0].price}}</span>
                        <CountGroup :food="it" :count="getCartsItemCout(it.dishsno)"/>
                    </p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import CountGroup from 'components/countgroup';
export default {
    name: 'app-dishs',
    computed: mapState(['newDishs', 'activeIndex', 'dish_kinds', 'cartsData']),
    components: {
        CountGroup
    },
    data() {
        return {
            dishes: [],
        }
    },
    methods: {
        ...mapActions([
            'initDishs',
        ]),
        getCartsItemCout(sno) {
            return this.cartsData[sno] && this.cartsData[sno].count ? this.cartsData[sno].count : 0;
        },
    },
    created(){
        this.initDishs();
    },
}
</script>
<style lang="less" scoped>
    .app-dishs{
        margin: 2rem 0 2rem 4rem;
        .dishe-item{
            padding: 0 .6rem;
            h3{
                font-size: .6rem;
                height: 1.4rem;
                line-height: 1.4rem;
                color: #666;
                font-weight: 500;
            }
            ul{
                li{
                    margin-bottom: 1rem;
                    .dishe-img{
                        display: block;
                        background: #ddd; 
                    }
                    .dish-name{
                        font-size: .7rem;
                        color: #333;
                        margin-top: 5px;
                    }
                    .dish-price{
                        display: flex;
                        height: 1.5rem;
                        line-height: 1.5rem; 
                        .price{
                            font-size: .65rem;
                            color: #06555d;
                            flex: 0 0 4rem;
                        }
                    }
                }
            }
        }
    }
</style>