import Vue from 'vue';
import app from './app.vue';
import router from './router.js';

// import('./appone/Header').then(res => {
//     console.log(111)
// });
// import app1 from 'app1';
import('app1/addDom').then(res => {
    console.log(2222)
    console.log(res)
    const title = res.default('App1 Content');
    document.body.append(title);
});
// import('app1Container/Header').then(res => {
//     console.log(33333);
//     console.log(res.default);
// });

new Vue({
    el: '#app',
    render: h => h(app),
    router
});