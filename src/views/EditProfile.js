import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class EditProfile extends React.Component {
    render(){
        return(
            <div>
                Edit Form
            </div>
            
        )
    }

}

let mapStateToProps = state => ({ user_id: state.user.id, errors: state.session.errors.updateUser })
export default connect(mapStateToProps)(EditProfile)