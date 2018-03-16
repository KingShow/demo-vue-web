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
    },]
}]