import router from './../router';

export default {
	name: 'navbar',
	data () {
		return {
			title: 'app',
			showMenu: null,
			pages: [
				{ name: 'Home', path: '/', icon: 'lnr-home grey' },
				{ name: 'Settings', path: '/settings', icon: 'lnr-cog purple' }
			]
		};
	},
	mounted() { },
	methods: {
		navigate: path => {
			router.push({ path });
		}
	}
};
