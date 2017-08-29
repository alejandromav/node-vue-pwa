/*global process*/

// import EventBus from '@/event-bus';
import { foo } from '@/services/foo.service';

export default {
	name: 'main',
	data () {
		return {
			env: process.env.NODE_ENV
		};
	},
	mounted() {
		foo().then(res => console.log(res.body));
	},
	methods: { }
};
