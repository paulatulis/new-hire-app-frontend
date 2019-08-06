import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LunchContainer from '../containers/LunchContainer';
import TaskContainer from '../containers/TaskContainer';

class Dashboard extends Component {
    render(){
        console.log(this.props.user)


        return(
            <div>
                {!this.props.user ?
                null
            :
            <div>
                    <h4>Welcome, {this.props.user.first_name}</h4>
                        <div>
                            <h2>Tasks</h2>
                            <TaskContainer allT={this.props.user.all_tasks} />
                        </div>
                        <div>
                            <h2>Upcoming Lunches</h2>
                            <LunchContainer allL={this.props.user.all_LM} />
                        </div>
                </div>
            }
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps)(Dashboard)