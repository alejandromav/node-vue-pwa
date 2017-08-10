// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import VueTouch from 'vue-touch';

// Custom components
import Navbar from '@/components/navbar';
Vue.component('navbar', Navbar);

Vue.use(VueResource);
Vue.use(VueTouch);
Vue.config.productionTip = false;

VueTouch.config.tap = {
	time: 1000
};

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
});
