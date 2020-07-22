import React, {useState} from "react";
import './InputField.scss'
function InputField(props) {

  const initialValid = (props.value && props.onValidate && props.regexp) ? props.regexp.test(String(props.value)): false;

  const [isValid, setIsValid] = useState(props.valid?props.valid:initialValid);
  function onChange(ev) {
    let newValue = ev.target.value;
    setIsValid(props.regexp.test(String(newValue)));
    if(props.onValidate && props.regexp){
      props.onValidate(props.regexp.test(String(newValue)));
    }
    if(props.onChange){
      props.onChange(newValue);
    }
  }
  return(
      <div className={`input-field${props.hidden?' hidden':''}`} >
        {props.text?<label>{props.text} </label>:null}
        <div className={"input-field__container"}>
          <input value={props.value} className={`input-field__container_input ${isValid? ' correct': ''}`}
                 type = {props.type} onChange={onChange} />
          {props.onValidate && props.regexp && props.patternmessage?
              <span className={`input-field__container_span ${isValid? '': 'hidden'}`} > {props.patternmessage}
              </span> : null}
        </div>
      </div>
  );
}
export default InputField;
