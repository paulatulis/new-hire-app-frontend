import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import tribe_logo from '../images/tribe2.png'
import Login from '../views/Login';
import SignUp from '../views/SignUp';

function Navbar(props) {
    return(
        <div>
            <Link to='/'><img alt="tribe logo" className="brand-logo center" src={tribe_logo}/></Link> 
            {
                props.loggedIn ? 
                    <div className="logged-in">
                        <Link to="/" onClick={()=>{ props.dispatch({type: 'LOG_OUT'}); props.dispatch({type: 'SET_USER'}) }}>Logout</Link> |
                        <Link to="/dashboard" component={null}> My Dashboard</Link> |
                        <Link to="/lunch_matcher" component={null}> Lunch Matcher</Link> |
                        <Link to="/profile" component={null}> My Profile</Link>
                    </div>
                :
                    <div className="logged-out">
                        <Link to='/login' component={Login}>Login</Link> |
                        <Link to='/sign_up' component={SignUp}> Sign Up</Link>
                    </div>   

            }

        </div>
    )
}

let mapStateToProps = state => ({ loggedIn: state.user.loggedIn, user_id: state.user.id })
export default connect(mapStateToProps)(Navbar)