import React from 'react'
import { connect } from 'react-redux'

/* -----------------    COMPONENT     ------------------ */

const TaskItem = (props) => {
  const { task } = props

  if (!task) {
    return null
  }

  return (
    <div className='task-item'>
      <h1>Task</h1>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(TaskItem)
