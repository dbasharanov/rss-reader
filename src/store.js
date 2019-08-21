import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import config from '@/config/db'
Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    feeds: [],
  },

  mutations: {
    GET_ALL_FEEDS(state, payload) {
      console.log(payload)
      state.feeds = payload;
    }
  },
  actions: {
    getFeeds(context){
      const authString = btoa(config.appKey + ':' + config.appSecret);
      fetch('https://baas.kinvey.com/appdata/' + config.appKey + '/feeds', {
        method: 'GET',
        headers: {
          'Authorization': 'Kinvey '+ localStorage.getItem('authtoken'),
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(data => context.commit('GET_ALL_FEEDS', data));
    }
  }
});