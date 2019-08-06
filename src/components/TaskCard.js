import React from 'react';

function TaskCard(props) {
    return(
        <div>
            <div className="card blue-grey lighten-4" >
                <div className="card-content">
                    <span className="card-title">{props.task.title}</span>
                    <span className="card-title-content"> Description:</span>
                    <p>{props.task.description}</p>
                    <span className="card-title-content"> Due Date:</span>
                    <p>{props.task.due_date}</p>
                    <p><label>
                        <input type="checkbox" className="filled-in" checked={props.task.complete === true} onChange={(e) => props.handleComplete(e, props.task)} />
                        <span className="card-title-content">{props.task.complete? "Complete!" : "Incomplete"}</span>
                    </label></p>
                </div>
                <div className="more-task-info-btn btn" onClick={(e) => props.handleClick(e)}>Show More</div>
            </div>
        </div>
    )
}

export default TaskCard