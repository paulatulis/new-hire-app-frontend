import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSignUp } from '../actions/user_actions'

class SignUp extends Component {

    render(){
        return(
            <div>
                <form onSubmit={ e => this.props.dispatch( handleSignUp(e) ) }>
                   Here's where Sign up Form will go. 
                </form>
            </div>

        )
    }
}

let mapStateToProps = state => ({ errors: state.session.errors.signup })
export default connect(mapStateToProps)(SignUp)