import ajax from '../config/ajax'

export default {
	addNum({ commit, state }, id) {
		//点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
		commit('REMBER_ANSWER', id);
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', 1);
		}
	},
	//初始化信息
	initializeData({ commit }) {
		commit('INITIALIZE_DATA');
	},
	initDishs({ commit }) {
		commit('INIT_DISHS');
	},
	setActive({commit}, id) {
		commit('SET_ACTIVE', id);
	},
	changeCarts({commit}, parmas) {
		commit('CHANGE_CARTS', parmas);
		commit('SET_CART_STYLE');
	},
	toggleCartsOpen({commit}) {
		commit('TOGGLE_CARTS');
	},
	setCartsStyle({commit}) {
		commit('SET_CART_STYLE');
	},
}