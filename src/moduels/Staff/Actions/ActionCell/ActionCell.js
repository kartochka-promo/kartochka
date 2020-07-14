import React from 'react';
import './ActionCell.scss'

function Actions(props) {
    return (
        <div className="staff-actions__actions__action__date__cell">
            <span className="staff-actions__actions__action__date__cell__text">{props.action}</span>
            <div className="staff-actions__actions__action__date__cell__strip"/>
            <span className="staff-actions__actions__action__date__cell__time">{props.time}</span>
        </div>
    );
}

export default Actions;
