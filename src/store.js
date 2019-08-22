import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import feedActions from '@/feeds/feedActions'
import feedMutations from '@/feeds/feedMutations'

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    feeds: [],
    isAuthenticated: (localStorage.getItem('authtoken') !== null)
  },
  actions: feedActions,
  mutations: feedMutations,

  getters: {
    getAllFeeds(state) {
      return state.feeds
    },
    doubleCounter(state) {
      return state.count *2;
    },
    getFeedsLength(state) {
      return state.feeds.length;
    }
  },
});