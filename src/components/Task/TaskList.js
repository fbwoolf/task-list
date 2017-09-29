import React from 'react'
import { connect } from 'react-redux'
import TaskStyle from './TaskStyle'
import TaskItem from './TaskItem'

const TaskList = (props) => {
  const { tasks } = props

  return (
    <TaskStyle>
      <div className='task-list'>
        {
          tasks.map(task => <TaskItem key={task.id} task={task} />)
        }
      </div>
    </TaskStyle>
  )
}

const mapState = ({ tasks }) => ({ tasks })
const mapDispatch = null

export default connect(mapState, mapDispatch)(TaskList)
