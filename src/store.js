// This file was generated as part of the Vuex option.

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		title: 'My Customised Title',
		links: [
			'https://www.bbc.co.uk',
			'https://www.yahoo.com',
			'https://www.glitch.com',
		],
	},

	//custom getter to count the number of links in the links array
	getters: {
		countLinks: (state) => {
			return state.links.length;
		},
	},
	mutations: {
		ADD_LINK: (state, link) => {
			state.links.push(link);
		},
		REMOVE_LINK: (state, link) => {
			state.links.splice(link, 1);
		},

		// remove all empties the array
		REMOVE_ALL: (state) => {
			state.links = [];
		},
	},
	actions: {
		removeLink: (context, link) => {
			context.commit('REMOVE_LINK', link);
		},
		removeAll({ commit }) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('REMOVE_ALL');
					resolve();
				}, 1500);
			});
		},
	},
});
