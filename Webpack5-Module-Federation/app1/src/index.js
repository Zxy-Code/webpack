import Vue from 'vue';
import app from './app.vue';
import router from './router.js';

import addDom from './addDom.js'
const title = addDom('App1 Content')
document.body.append(title);

new Vue({
    el: '#app',
    render: h => h(app),
    router
});