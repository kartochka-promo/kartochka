import React, {useEffect, useState} from 'react';
import "./Form.scss"
function Form(props) {
    return (
        <div className={"form"}>
            {props.children}
        </div>
    );
}
export default Form;
