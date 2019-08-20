import config from '@/config/db'

const currentUser = user => {
  localStorage.setItem('username', user.username)
  localStorage.setItem('authoken', user.authtoken)
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
          authoken: data._kmd.authtoken
      }));
    }
  }
}