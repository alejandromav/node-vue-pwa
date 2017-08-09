/*global process*/

// import EventBus from '@/event-bus';

export default {
	name: 'main',
	data () {
		return {
			env: process.env.NODE_ENV
		};
	},
	mounted() {
		const url = `${process.env.API_URL}/search/get/camisa`;

		this.$http.get(url).then(response => {
			// success callback
			console.log(response.body);
		}, err => {
			// error callback
			console.error(err);
		});
	},
	methods: { }
};
