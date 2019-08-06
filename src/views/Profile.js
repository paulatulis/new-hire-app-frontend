import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import EditProfile from '../views/EditProfile';

class Profile extends Component {
    state={
        editClicked: null
    }
    render(){
        console.log(this.props.user)
        return(
            <div>
                Profile
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps)(Profile)
