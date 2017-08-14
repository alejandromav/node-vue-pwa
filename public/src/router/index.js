import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/main';
import Settings from '@/components/settings';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Main',
			component: Main
		},
		{
			path: '/index.html',
			name: 'Main',
			component: Main
		},
		{
			path: '/settings',
			name: 'Settings',
			component: Settings
		}
	]
});
