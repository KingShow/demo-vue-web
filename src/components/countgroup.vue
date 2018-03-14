<template>
    <span class="btn-group">
        <i class="decrease-btn" v-if="count > 0" @click="onDecreaseHandler({food, count})">-</i>
        <span class="count" v-if="count > 0">{{count}}</span>
        <i class="increase-btn" @click="onIncreaseHandler({food, count})">+</i>
    </span>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        props:['food','count'],
        methods: {
            ...mapActions([
                'changeCarts',
            ]),
            onDecreaseHandler({food, count}) {
                var newCount = count - 1;
                this.changeCarts({food, newCount});
            },
            onIncreaseHandler({food, count}) {
                var newCount = count + 1;
                this.changeCarts({food, newCount});
            }
        },
    }
</script>
<style lang="less">
@import url('../style/bluestyle.less');
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
            background: @base-color;
            border: 1px solid @base-color;
            color: #fff;
        }
        .decrease-btn{
            border: 1px solid @base-color;
            color: @base-color;
        }
        .count{
            display: inline-table;
            font-size: .7rem;
            width: 1rem;
            text-align: center;
        }
    }
</style>