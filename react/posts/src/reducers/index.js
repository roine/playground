import {
  END_PAGE_TRANSITION,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  START_PAGE_TRANSITION,
} from './../constants';

const initialState = {
  home: {},
  post: {
    posts: {fetching: false, data: []},
  },
  pageTransitioning: false,
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        post: {
          ...state.post,
          posts: {
            ...state.post.posts,
            fetching: true,
          },
        },
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        post: {
          ...state.post,
          posts: {
            ...state.post.posts,
            data: action.data,
            fetching: false,
          },
        },
      };
    case START_PAGE_TRANSITION:
      return {...state, pageTransitioning: true};
    case END_PAGE_TRANSITION:
      return {...state, pageTransitioning: false};
    default:
      return state;
  }
}

export default reducers;