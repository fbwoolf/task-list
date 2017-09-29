import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { fetchTasks } from './store'
import App from './App'
import { MainContainer } from './components'

/* -----------------    COMPONENT     ------------------ */

class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    return (
      <Router history={history}>
        <App>
          <Switch>
            <Route exact path='/' component={MainContainer} />
          </Switch>
        </App>
      </Router>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchTasks())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/* -----------------    PROPTYPES     ------------------ */

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired
}
