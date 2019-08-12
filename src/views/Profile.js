import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Profile extends Component {
   
    render(){
        return(
            <div className="row center-align">
                {!this.props.user? null 
                :
                <div className="card large center-align col s6 offset-s3">
                    <div className="card-content m6 center-align">
                    <img className="circle responsive-img" alt="profile" src={this.props.user? this.props.user.photo : "http://www.liberaldictionary.com/wp-content/uploads/2019/01/dab-0428.jpg"}/>
                    <span className="card-title">{this.props.user.first_name} {this.props.user.last_name}</span>
                    <p><span className="profile-card-title-content">Email</span>: {this.props.user? this.props.user.email: null}</p>
                    <p><span className="profile-card-title-content">Username</span>: {this.props.user? this.props.user.username: null}</p>
                    <p><span className="profile-card-title-content">Team</span>: {this.props.user? this.props.user.team: null}</p>
                    <p><span className="profile-card-title-content">Title</span>: {this.props.user? this.props.user.title : null}</p>
                    <p><span className="profile-card-title-content">Bio</span>: {this.props.user? this.props.user.bio : null}</p>
                    <p><span className="profile-card-title-content">Start Date</span>: {this.props.user? this.props.user.start_date : "August 1, 2019"}</p>
                    <p><span className="profile-card-title-content">{this.props.user.manager? "I'm a manager" : null} </span></p>
                    </div>
                    <Link className="waves-effect waves-light light-green darken-2 btn-large" to="/edit_profile">Edit My Profile</Link>
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps)(Profile)
