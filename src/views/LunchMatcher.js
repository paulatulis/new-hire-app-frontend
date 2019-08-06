import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LunchMatcher extends Component {
    render(){
        return(
            <div>
                LunchMatcher here
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps)(LunchMatcher)
