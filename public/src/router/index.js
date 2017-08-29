import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			alias: [ '/index.html' ],
			name: 'Main',
			component: () => import('@/components/home/home')
		},
		{
			path: '/settings',
			name: 'Settings',
			component: () => import('@/components/settings/settings')
		}
	]
});
