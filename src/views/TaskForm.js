import React, { Component }from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
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
                <form className="ui-form" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col s5">
                            <div className="field">
                                <input required name='title' type='text' placeholder='Title' />
                            </div>
                            
                            <div className="materialize-textarea">
                                <input required name='description' placeholder='Task Description'/>
                            </div>
                            
                        <Calendar minDate={new Date()} onChange={ e => this.setState({ date: e }) } />
                        <button type='submit' className='waves-effect waves-light green lighten-1 btn'>Submit</button>
                    </div>
                    </div>
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
