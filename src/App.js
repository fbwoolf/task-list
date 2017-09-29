import './App.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { NavbarContainer } from './components'

const App = (props) => {
  const {children} = props

  return (
    <div className='App'>
      <NavbarContainer />
      { children }
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default withRouter(connect(mapState, mapDispatch)(App))

/* -----------------    PROPTYPES     ------------------ */

App.propTypes = {
  children: PropTypes.object
}
