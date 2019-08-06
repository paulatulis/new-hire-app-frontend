import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import LunchCard from '../components/LunchCard'

let lunchArray
class LunchContainer extends Component {

    render() {
        lunchArray = this.props.allL.map((lunch) => <div className="col s6"><LunchCard key={lunch.id} lunch={lunch} /></div>)
        return (
            <div>
                {lunchArray}
            </div>
        )
    }
}


export default LunchContainer