import axios from 'axios'

/* -----------------    ACTION TYPES ------------------ */

const INITIALIZE = 'INITIALIZE_TASKS'
const CREATE = 'CREATE_TASK'
const REMOVE = 'REMOVE_TASK'

/* ------------   ACTION CREATORS     ------------------ */

const init = tasks => ({ type: INITIALIZE, tasks })
const create = task => ({ type: CREATE, task })
export const remove = task => ({ type: REMOVE, task })

/* ------------       REDUCER     ------------------ */

export default function reducer (tasks = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.tasks
    case CREATE:
      return [action.task, ...tasks]
    case REMOVE:
      return tasks.filter(task => task.id !== action.id)
    default:
      return tasks
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchTasks = () => dispatch => {
  axios.get('http://cfassignment.herokuapp.com/farawoolf/tasks')
    .then(res => dispatch(init(res.data.data)))
    .catch(err => console.error('Fetching data unsuccesful', err))
}

export const addTask = task => dispatch => {
  axios.post('http://cfassignment.herokuapp.com/farawoolf/tasks', task)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error(`Creating task: ${task} unsuccesful`, err))
}

export const removeTask = id => dispatch => {
  dispatch(remove(id))
  axios.delete('http://cfassignment.herokuapp.com/farawoolf/tasks')
    .catch(err => console.error(`Removing task: ${id} unsuccesful`, err))
}
