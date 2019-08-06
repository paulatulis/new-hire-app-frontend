import React from 'react';

function LunchCard(props) {
return(
    <div>
        <div className="card blue-grey lighten-4" >
                <div className="card-content">
                    <span className="card-title">{props.lunch.name}</span>
                    <span className="card-title-content"> Where:</span>
                    <p>{props.lunch.location}</p>
                    <span className="card-title-content"> Address:</span>
                    <p>{props.lunch.address}</p>
                    <span className="card-title-content"> </span>
                    <p>{props.lunch.photo}</p>
                    
                </div>
            </div>
    </div>
)
}

export default LunchCard