export default {
	name: 'navbar',
	data () {
		return {
			title: 'app',
			isCollapsed: true
		};
	},
	mounted() { },
	methods: {
		onTap: $e => {
			console.log($e);
		}
	}
};
