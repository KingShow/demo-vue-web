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
                        <span class="btn-group">
                            <i class="decrease-btn">-</i>
                            <span class="count">20</span>
                            <i class="increase-btn">+</i>
                        </span>
                    </p>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'app-dishs',
    computed: mapState(['newDishs', 'activeIndex', 'dish_kinds', 'cartsData']),
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
                        .btn-group{
                            flex: 1;
                            text-align: right;
                            .increase-btn, .decrease-btn{
                                width: 1.3rem;
                                height: 1.3rem;
                                display: inline-block;
                                border-radius: 1.3rem;
                                line-height: 1.1rem;
                                text-align: center;
                            }
                            .increase-btn{
                                background: #4ea5ad;
                                border: 1px solid #4ea5ad;
                                color: #fff;
                            }
                            .decrease-btn{
                                border: 1px solid #4ea5ad;
                                color: #4ea5ad;
                            }
                            .count{
                                display: inline-block;
                                font-size: .7rem;
                                width: 1rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>