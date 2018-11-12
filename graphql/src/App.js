import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { graphql } from 'react-apollo'
import { getHello } from './queries'
import PropTypes from 'prop-types'

class App extends Component {
  render () {

    const {data} = this.props
    if (data.loading) {
      return 'Loading'
    }
    if (data.error) {
      return 'error'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {this.props.data.hello}
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.shape({
    hello: PropTypes.string,
    loading: PropTypes.boolean,
    error: PropTypes.object,
  }),
}

export default graphql(getHello)(App)
