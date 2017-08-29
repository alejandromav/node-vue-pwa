import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Main',
			component: () => import('@/pages/home/components/home')
		},
		{
			path: '/settings',
			name: 'Settings',
			component: () => import('@/pages/settings/components/settings')
		}
	]
});
