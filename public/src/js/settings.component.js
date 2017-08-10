/*global process*/

// import EventBus from '@/event-bus';

export default {
	name: 'settings',
	data () {
		return {
			env: process.env.NODE_ENV
		};
	},
	mounted() { },
	methods: { }
};
