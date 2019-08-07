import React, { Component }from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Calendar from 'react-calendar'
import { createNewT } from '../actions/task_actions';


class TaskForm extends Component {
    state = {
        redirect: null,
        date: null
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let form = e.target
        let newTask = {
            title: form.title.value,
            description: form.description.value,
            due_date: this.state.date,
            complete: false,
            user_id: this.props.user.id
        }
        this.props.addTask(newTask)
        this.setState({ redirect: <Redirect to='/dashboard' /> })
    }

    render () {
        if (this.state.redirect)
            return this.state.redirect
        return (
            <div>
                <h1>Create a New Task</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required name='title' type='text' placeholder='Title' />
                    <textarea required name='description' placeholder='Task Description'></textarea>
                    <Calendar minDate={new Date()} onChange={ e => this.setState({ date: e }) } />
                    <button type='submit' className='btn-blue submit-btn'>Submit</button>
                </form>

            </div>
        )
    }

}
const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = dispatch => {
    return {
        addTask: (task) => dispatch(createNewT(task))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
