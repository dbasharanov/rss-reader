import config from '@/config/db'

const currentUser = user => {
  localStorage.setItem('username', user.username)
  localStorage.setItem('authtoken', user.authtoken)
};
export const authService = {
  computed: {
    isAuthenticated() {
      return localStorage.getItem('authtoken') !== null;
    }
  }
}
export const registerUser = { 
  methods: {
    registration(username, password,email){
      const authString = btoa(config.appKey + ':' + config.appSecret);

      this.$http.defaults.headers.post['Authorization'] = 'Basic '+ authString;
      return this.$http.post( 'https://baas.kinvey.com/user/' + config.appKey, {
          username: username,
          password: password,
          email: email
      }).then(({data}) => currentUser({
          username: data.username,
          authtoken: data._kmd.authtoken
      }));
    }, 
    login(username, password,email){
      const authString = btoa(config.appKey + ':' + config.appSecret);

      this.$http.defaults.headers.post['Authorization'] = 'Basic '+ authString;
      return this.$http.post( 'https://baas.kinvey.com/user/' + config.appKey + '/login', {
          username: username,
          password: password,
          email: email
      }).then(({data}) => currentUser({
          username: data.username,
          authtoken: data._kmd.authtoken
      }));
    }

  }
}