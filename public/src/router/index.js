import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/components/home';
import Settings from '@/pages/settings/components/settings';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Main',
			component: Home
		},
		{
			path: '/index.html',
			name: 'Main',
			component: Home
		},
		{
			path: '/settings',
			name: 'Settings',
			component: Settings
		}
	]
});
