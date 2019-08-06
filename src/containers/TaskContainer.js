import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import TaskCard from '../components/TaskCard'

let taskArray
class TaskContainer extends Component {

    render() {
        taskArray = this.props.allT.map((task) => <div className="col s6"><TaskCard key={task.id} task={task} /></div>)
        return (
            <div>
                {taskArray}
            </div>
        )
    }
}

export default TaskContainer