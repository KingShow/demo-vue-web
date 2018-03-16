<template>
    <div class="app-carts">
        <ul :style="cartsOpen ? style.cartHeight : style_hide">
            <li v-for="(it, i) in cartsData">
                <p class="cart-name">{{it.name}}</p>
                <CountGroup :food="it" :count="getItemNumber(it.dishsno)"/>
            </li>
        </ul>
        <div class="carts-group">
            <div class="carts-price group-left" @click="onToggleCarts()">¥{{totalPrice}}</div>
            <button v-if="totalDishs > 0" class="blue-btn group-right" @click="onClickOk()">去结算</button>
            <button v-else class="default-btn group-right">暂无菜品</button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import CountGroup from 'components/countgroup';
export default {
    name: 'app-carts',
    computed: mapState(['cartsData', 'cartsOpen', 'totalPrice', 'totalDishs', 'style']),
    components: {
        CountGroup
    },
    data() {
        return {
            style_hide: 'transform: translate3d(0, 9rem, 0);',
        }
    },
    methods: {
        ...mapActions(['toggleCartsOpen',]),
        getItemNumber(sno) {
            return this.cartsData[sno] && this.cartsData[sno].count ? this.cartsData[sno].count : 0;
        },
        onToggleCarts() {
            this.toggleCartsOpen();
        },
        onClickOk(){
            this.$router.push('order');
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/bluestyle.less');
    .app-carts{
        width: 100%;
        position: fixed;
        bottom: 0;
        background: #fff;
        .show{
            transform: translate3d(0, -7rem, 0);
        }
        .hide{
            transform: translate3d(0, 9rem, 0);
        }
        ul{
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            background: #fff;
            max-height: 8rem;
            overflow-y: auto;
            transition: all .5s;
            li{
                display: flex;
                font-size: .6rem;
                height: 2rem;
                line-height: 2rem;
                margin: 0 .25rem;
                p{
                    flex: 1;
                }
                span{
                    display: inline-block;
                    line-height: 2rem;
                    height: 2rem;
                    flex: 0 0 5rem;
                }
            }
        }
        .carts-group{
            height: 2rem;
            display: flex;
            .group-left{
                flex: 1;
                font-size: .8rem;
                height: 2rem;
                line-height: 2rem;
                padding-left: 1rem;
            }
            .group-right{
                flex: 0 0 5rem;
            }
            .blue-btn, .default-btn{
                height: 2rem;
            }
            .blue-btn{
                background: @base-color;
                color: #fff;
            }
        }
    }
</style>