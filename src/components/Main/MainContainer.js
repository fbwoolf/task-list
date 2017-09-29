import React from 'react'
import { connect } from 'react-redux'
import MainStyle from './MainStyle'
import TaskList from '../Task/TaskList'

/* -----------------    COMPONENT     ------------------ */

const MainContainer = () => {
  return (
    <div>
      <MainStyle>
        <TaskList />
      </MainStyle>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(MainContainer)
