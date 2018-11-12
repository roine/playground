import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {startPageTransition, endPageTransition} from './../actions';

function LinkPrefect({history, fn, to, children, dispatch}) {

  function prepare(e) {
    e.preventDefault();
    fn(() => {
      dispatch(endPageTransition);
      history.push(to);
    });
    dispatch(startPageTransition);
    return false;
  }

  return <button onClick={prepare}>{children}</button>;
}

export default withRouter(connect()(LinkPrefect));