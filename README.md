


## 项目运行（nodejs 6.0+）
``` bash
# 克隆到本地
git clone 

# 安装依赖
npm install

# 开启本地服务器localhost:8088
npm run dev

# 发布环境
npm run build
```



## 路由配置
```js
import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/order',
        component: r => require.ensure([], () => r(require('../page/order')), 'order')
    }]
}]

```



## 配置actions
```js
import ajax from '../config/ajax'

export default {
	addNum({ commit, state }, id) {
		//点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
		commit('REMBER_ANSWER', id);
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', 1);
		}
	},
	initDishs({ commit }) {
        commit('INIT_DISHS');
    },
}

```


## mutations
```js
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
	//点击进入下一题
	[ADD_ITEMNUM](state, payload) {
		state.itemNum += payload.num;
	},
    [SET_ACTIVE](state, id) {
        state.activeIndex = id;
    },
}
```

## 创建store
```js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'


Vue.use(Vuex)

const state = {
	activeIndex: 0,
    dish_kinds: DATA.dish_kinds,
    dishs: DATA.dishs,
    tables: DATA.tables,
    shops: DATA.shops,
    marketing: DATA.marketing,
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})
```


## 创建vue实例
```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
}).$mount('#app')
```

