import React, { Component } from 'react'
import TaskCard from '../components/TaskCard'

let taskArray
class TaskContainer extends Component {

    render() {
        taskArray = this.props.allT.map((task) => <div className="col s6"><TaskCard key={task.id} task={task} handleComplete={this.props.handleComplete}/></div>)
        return (
            <div className="overview row">
                {
                !this.props.allT? null
                :
                <div> {taskArray}</div>
                }
            </div>
        )
    }
}

export default TaskContainer