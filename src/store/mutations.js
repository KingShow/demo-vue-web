const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const INIT_DISHS = 'INIT_DISHS';
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
		const runItem = (id, item) => {
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
	}
}