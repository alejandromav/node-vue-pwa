/*global process*/

import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const URL = `${process.env.API_URL}`;

export const foo = () => {
	return Vue.http.get(`${URL}`);
};
