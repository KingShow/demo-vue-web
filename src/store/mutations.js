const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const INIT_DISHS = 'INIT_DISHS';
export default {
	//点击进入下一题
	[ADD_ITEMNUM](state, num) {
		state.itemNum += num;
	},
	//记录答案
	[REMBER_ANSWER](state, id) {
		state.answerid.push(id);
	},
	/*
	记录做题时间
	 */
	[REMBER_TIME](state) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},
	/*
	初始化信息，
	 */
	[INITIALIZE_DATA](state) {
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	},
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
		})
		state.newDishs = newDishs;
	}
}