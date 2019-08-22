import {getAllFeeds} from '@/feeds/feedMutations'
import config from '@/config/db'

export default  {
  getFeeds(context){
      const authString = btoa(config.appKey + ':' + config.appSecret);
      fetch('https://baas.kinvey.com/appdata/' + config.appKey + '/feeds', {
        method: 'GET',
        headers: {
          'Authorization': 'Kinvey '+ localStorage.getItem('authtoken'),
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(data => context.commit(getAllFeeds(data)));
    }
  }
