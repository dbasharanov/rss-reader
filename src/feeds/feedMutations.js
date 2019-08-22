export const GET_ALL_FEEDS = 'GET_ALL_FEEDS'

export const getAllFeeds = data => ({
  type: GET_ALL_FEEDS,
  payload: data
})

export default {
  [GET_ALL_FEEDS] (state, payload) {
    state.feeds = payload;
  }
}