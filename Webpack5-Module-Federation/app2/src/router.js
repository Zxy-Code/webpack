import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from './components/Index.vue';
import Header from './components/Header.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    // history模式下/表示根目录，需要设置base root
    base: '/app2/index.html',
    // 默认进入信息填写页
    routes: [
        {
            path: '/',
            name: 'app2',
            // meta: {title: '订单中心'},
            component: IndexPage
        },
        {
            path: '/header',
            component: Header
        }
    ]
});
