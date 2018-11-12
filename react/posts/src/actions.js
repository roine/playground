import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  START_PAGE_TRANSITION,
  END_PAGE_TRANSITION,
} from './constants';
import axios from 'axios';

const postFetching = {type: FETCH_POSTS};

const fetchPosts = (fn) => {
  return dispatch => {
    dispatch(postFetching);
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then(data => {
          dispatch(fetchPostsSuccess(data));
          if (typeof fn === 'function') {
            fn();
          }
        });
  };
};

const fetchPostsSuccess = (data) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    data,
  };
};

const startPageTransition = {type: START_PAGE_TRANSITION};

const endPageTransition = {type: END_PAGE_TRANSITION};

export {fetchPosts, fetchPostsSuccess, startPageTransition, endPageTransition};