import {INIT_DISHS,SET_ACTIVE,CHANGE_CARTS, TOGGLE_CARTS, SET_CART_STYLE} from './constants'
import ajax from '../config/ajax'
export default {
	/**
	 *菜品排序
	 */
	[INIT_DISHS](state) {
		let newDishs = {};
		const data = Object.assign({}, {}, state.dishs);
		const kinds = [].concat(state.dish_kinds);
		kinds.map((it, i) => {
			if (it.id) {
				newDishs[it.id] = []
			}
		});
		let runItem = (id, item) => {
			if (id) {
				let newDishsItem = newDishs[id];
				newDishsItem.push(item);
			}
		};
		Object.keys(data).forEach((item, index) => {
			data[item].dishkind.map((it) => {
				runItem(it, data[item]);
			})
		});
		state.newDishs = newDishs;
	},
	[SET_ACTIVE](state, id) {
		state.activeIndex = id;
	},
	[TOGGLE_CARTS](state) {
		if (state.totalDishs) {
			state.cartsOpen = !state.cartsOpen;
		}
	},
	[SET_CART_STYLE](state) {
		const height = Number(Object.keys(state.cartsData).length) * 2;
		const liHeight = height > 8 ? 8 : height;
		state.style.cartHeight = `transform: translate3d(0, -${liHeight}rem, 0);`;
	},
	[CHANGE_CARTS](state, parmas) {
		let newCarts = {};
		let totalDishs = 0;
		let totalPrice = 0;
		const {dishsno, name, type, norms} = {...parmas.food};
		const count = parmas.newCount;
		const data = state.cartsData;
		if (data[dishsno]) {
			data[dishsno].count = count;
			if (count == 0) {
				delete data[dishsno];
			}
		} else {
			newCarts[dishsno] = {dishsno, name, type, norms, count};
			state.cartsData = Object.assign({}, data, newCarts);
		}
		Object.keys(state.cartsData).forEach((k, y) => {
			totalPrice += state.cartsData[k].norms[0].price * 100 * (state.cartsData[k].count);
			totalDishs += state.cartsData[k].count;
		});
		if (totalDishs == 0) {
			state.cartsOpen = false;
		}
		state.totalPrice = totalPrice/100;
		state.totalDishs = totalDishs;
	 },
}