import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import LunchContainer from '../containers/LunchContainer';
import TaskContainer from '../containers/TaskContainer';
import { markComplete } from '../actions/task_actions';
import { cancelLunch } from '../actions/lunch_actions';


class Dashboard extends Component {
    state = {
        redirect: null
    }

    handleComplete = (e, taskInfo) => {
        e.preventDefault()
        if(taskInfo.complete) {taskInfo.complete = false}
        else {taskInfo.complete = true}
        this.props.updateTask(taskInfo)
    }

    handleAddT = () => {
        this.setState({ redirect: <Redirect to='/new_task' /> })
    }
    handleAddL = () => {
        this.setState({redirect: <Redirect to='/lunch_matcher' /> })
    }

    handleCancel = (e, lunch) => {
        e.preventDefault()
        this.props.cancelL(lunch)
    }


    render(){
        console.log(this.props.user)


        return(
            <div>
                {!this.props.user.all_tasks || !this.props.user.all_LM?
                null
            :
            <div>
                { this.state.redirect }
                    <h4>Welcome, {this.props.user.first_name}</h4>
                        <div>
                            <h2>Tasks</h2>
                            <h3><button className="waves-effect waves-light green lighten-1 btn" onClick={this.handleAddT}>New Task</button></h3>
                            <TaskContainer allT={this.props.user.all_tasks} handleComplete={this.handleComplete} handleAddNotes={this.handleAddNotes}/>
                        </div>
                        <div>
                            <h2>Upcoming Lunches</h2>
                            <h3><button className="waves-effect waves-light green lighten-1 btn" onClick={this.handleAddL}>Schedule a Lunch!</button></h3>
                            <LunchContainer allL={this.props.user.all_LM} handleCancel={this.handleCancel}/>
                        </div>
                </div>
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = dispatch => {
    return {
        updateTask: (task) => dispatch(markComplete(task)),
        cancelL: (lunchId) => dispatch(cancelLunch(lunchId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)