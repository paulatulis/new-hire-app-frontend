import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSignUp } from '../actions/user_actions';

class SignUp extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSignUp(e)
        this.props.history.push('/dashboard')
    }

    render(){
        return(
            <div className="row" id="signup">
                <form className="col s8" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="first_name" type="text" className="validate"/>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="last_name" type="text" className="validate"/>
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="username" type="text" className="validate" />
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <i className="material-icons prefix">add_a_photo</i>
                            <input id="photo" type="text" className="validate" />
                            <label htmlFor="photo">Link to a photo of you</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className="waves-effect waves-light green darken-3 btn-large">Sign Up!</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return { handleSignUp: (user) => {dispatch(handleSignUp(user)) }}
}

export default connect(null,mapDispatchToProps)(SignUp)