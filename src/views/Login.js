import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/user_actions';
import { withRouter } from 'react-router-dom';


class Login extends Component {
    

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleLogin(e)
        this.props.history.push('/dashboard')
    }
    render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
            <div className="field">
                <label>Username</label>
                <input required type="text" name="username" placeholder="Username"/>
            </div>
            <div className="field">
                <label>Password</label>
                <input required type="password" name="password" placeholder="Password"/>
            </div>
                <button className="waves-effect waves-light green lighten-1 btn" type="submit">Submit</button>
            </form>

        </div>
    )
    }
}

let mapStateToProps = state => ({ ...state })

let mapDispatchToProps = dispatch => {
    return { handleLogin: (user) => {dispatch(handleLogin(user)) }}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Login))
