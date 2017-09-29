import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NavbarStyle from './NavbarStyle'
import { fetchTasks } from '../../store'

/* -----------------    COMPONENT     ------------------ */

const NavbarContainer = (props) => {
  const { handleClick } = props
  return (
    <NavbarStyle>
      <div className='nav-header'>
        <NavLink to='/' onClick={handleClick}><h1>TASK LIST</h1></NavLink>
      </div>
    </NavbarStyle>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = (dispatch, ownProps) => {
  return {
    handleClick (evt) {
      evt.stopPropagation()
      dispatch(fetchTasks())
    }
  }
}

export default connect(mapState, mapDispatch)(NavbarContainer)
