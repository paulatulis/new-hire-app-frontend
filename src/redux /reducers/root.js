import { combineReducers } from 'redux'
import userReducer from './user'
import taskReducer from './task'
import lunchReducer from './lunch'

export default combineReducers({
    user: userReducer,
    task: taskReducer,
    lunch: lunchReducer
})