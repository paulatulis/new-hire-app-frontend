import React, { Component } from 'react';
import TaskCard from '../components/TaskCard';

let taskArray
class TaskContainer extends Component {


    render() {
        taskArray = this.props.allT.map((task) => <div className="col s6"><TaskCard key={task.id} task={task} handleComplete={this.props.handleComplete}/></div>)
        
        return (
            <div className="overview row">
                {
                this.props.allT.length < 1? 
                <div> This seems empty. Click 'NEW TASK' to get started.</div>
                :
                <div> {taskArray} </div>
                }
            </div>
        )
    }
}


export default TaskContainer