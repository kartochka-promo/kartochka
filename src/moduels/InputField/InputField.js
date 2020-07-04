import React, {useState} from "react";


function InputField(props) {
  const [isValid, setIsValid] = useState(false);
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
      <div className={`input-field${props.hidden?'hidden':''}`} >
        <label>{props.text} </label>
        <div className={"input-field__container"}>
          <input className={`input-field__container_input ${isValid? 'correct': ''}`} type = {props.type} onChange={onChange} />
          {props.patternmessage? <span className={`input-field__container_span ${isValid? '': 'hidden'}`} > {props.patternmessage}</span> : null}
        </div>
      </div>
  );

}

export default InputField;
