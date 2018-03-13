import {INIT_DISHS,SET_ACTIVE} from './constants'
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
	}
}