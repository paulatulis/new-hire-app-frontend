import React, { Component } from 'react';
import LunchCard from '../components/LunchCard';

let lunchArray
class LunchContainer extends Component {

    render() {
        lunchArray = this.props.allL.map((lunch) => <div className="col s6"><LunchCard key={lunch.id} lunch={lunch} handleCancel={this.props.handleCancel}/></div>)
        
        return (
            <div className="overview row">
                {this.props.allL.length < 1 ? 
                <div> What are you waiting for? Get to know your new colleagues over a meal! Click 'SCHEDULE A LUNCH!' to get started.</div>
                :
                <div> {lunchArray}</div>
                }
                
            </div>
        )
    }
}


export default LunchContainer