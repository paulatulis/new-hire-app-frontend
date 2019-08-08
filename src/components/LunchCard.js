import React from 'react';

function LunchCard(props) {
return(
    <div>
        <div className="card blue-grey lighten-4" >
                <div className="card-content center-align">
                    <span className="card-title">{props.lunch.name}</span>
                    <span className="card-title-content"> Where:</span>
                    <p>{props.lunch.location}</p>
                    <span className="card-title-content"> Address:</span>
                    <p>{props.lunch.address}</p>
                    <span className="card-title-content"> When:</span>
                    <p>{props.lunch.date}</p>
                    <span className="card-title-content"> Rating:</span>
                    <p>{props.lunch.yelp_info} stars</p>
                    <br></br>
                    <span className="cancel-btn"><button className="waves-effect waves-light red lighten-1 btn" onClick={(e, lunch) => props.handleCancel(e, props.lunch)}>Cancel Lunch</button></span>
                </div>
            </div>
    </div>
)
}

export default LunchCard