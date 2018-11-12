import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router, Link,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './../Page/Home';
import Post from './../Page/Post';
import LinkPrefect from './../LinkPrefect';
import {fetchPosts} from './../../actions';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.preparePost = this.preparePost.bind(this);
  }

  preparePost(callback) {
    // fn is our callback
    this.props.dispatch(fetchPosts(callback));
  }

  render() {
    return (
        <Router>
          <div>
            <Link to="/">Home</Link>
            <LinkPrefect fn={this.preparePost} to="/posts">Posts</LinkPrefect>
            {this.props.pageTransitioning ? 'Loading' : ''}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/posts" component={Post}/>
            </Switch>
          </div>

        </Router>

    );
  }

}

function mapStateToProps(state) {
  return {
    pageTransitioning: state.pageTransitioning,
  };
}

export default connect(mapStateToProps)(App);
