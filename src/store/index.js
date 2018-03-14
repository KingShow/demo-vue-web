import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'
import DATA from './data.json'


Vue.use(Vuex)
const state = {
	activeIndex: 0,
	dish_kinds: DATA.dish_kinds,
	dishs: DATA.dishs,
	tables: DATA.tables,
	shops: DATA.shops,
	marketing: DATA.marketing,
	memo: DATA.memo,
	platform_info: DATA.platform_info,
	wlife: DATA.wlife,
	newDishs: {},
	cartsData: {},
	cartsOpen: false,
	totalPrice: 0,
	totalDishs: 0,
};

export default new Vuex.Store({
	state,
	actions,
	mutations
})