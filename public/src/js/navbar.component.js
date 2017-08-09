export default {
	name: 'navbar',
	data () {
		return {
			title: 'app',
			showMenu: null
		};
	},
	mounted() { },
	methods: {
		onTap: $e => {
			console.log($e);
		}
	}
};
