import React from 'react';


function Actions(props) {
    return (
        <div className="staff-actions__actions__action__date">
            <div className="staff-actions__actions__action__date__strip-span">
                <span>{props.date}</span>
                <div className="staff-actions__actions__action__date__strip-span__strip">
                </div>
            </div>
        </div>
    );
}

export default Actions;
