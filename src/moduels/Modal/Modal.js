import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss'
const Modal = (props) => props.isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay"/>
        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-header">
                    <button type="button" className="modal-close-button" onClick={props.hide}>
                        <span>&times;</span>
                    </button>
                </div>
                {props.children}
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;
