import React from 'react';
import {connect} from 'react-redux';
import './style.css';

function Post(props) {

  function postView(post, idx) {
    return (
        <div className="post" key={idx}>
          {post.title}
        </div>);
  }

  function noDataView() {
    return <div>No post found</div>;
  }

  if (props.post.posts.data.length === 0) {
    return noDataView();
  }

  return <div>{props.post.posts.data.map(postView)}</div>;
}

function mapStateToProps(state) {
  return {
    post: state.post,
  };
}

export default connect(mapStateToProps)(Post);