import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { editUser } from '../actions/user_actions';

class EditProfile extends React.Component {
    state = {
        redirect: null
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let form = e.target
        let newProfile = {
            email: form.email.value,
            username: form.username.value,
            team: form.team.value,
            title: form.title.value,
            bio: form.bio.value,
            photo: form.photo.value,
            password: form.password.value
        }
        this.props.updateUser(e, newProfile, this.props.user)
        this.setState({ redirect: <Redirect to='/profile' /> })
    }
    render() {
        if (this.state.redirect)
            return this.state.redirect
        return(
            <div className="row center-align">
                <form className="ui-form col s12" onSubmit={this.handleSubmit}>
                    <div className="card center-align col s6 offset-s3">
                        <div className="card-content center-align">
                            <img className="circle responsive-img" alt="profile" src={this.props.user.photo? this.props.user.photo : "http://www.liberaldictionary.com/wp-content/uploads/2019/01/dab-0428.jpg"}/>
                            <span className="card-title">{this.props.user.first_name} {this.props.user.last_name}</span>
                            <div className="field">
                                <input name='email' type='text' placeholder='Email' />
                            </div>
                            <div className="field">
                                <input name='username' type='text' placeholder='Username' />
                            </div>
                            <div className="field">
                                <input name='team' type='text' placeholder='Team' />
                            </div>
                            <div className="field">
                                <input name='title' type='text' placeholder='Title' />
                            </div>
                            <div className="field">
                                <input name='bio' type='text' placeholder='Bio' />
                            </div>
                            
                            <div className="field">
                                <input name='photo' type='text' placeholder='Link to new photo' />
                            <div className="field">
                                <input name='password' type='password' placeholder='enter password to make changes' />
                            </div>
                                <button className="waves-effect waves-light light-green darken-2 btn-large" >Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => ({ user: state.user })
const mapDispatchToProps = dispatch => {
    return{
        updateUser: (e, user, id) => dispatch(editUser(e, user,id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)