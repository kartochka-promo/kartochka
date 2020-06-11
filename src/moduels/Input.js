import React from "react";

function Input(props) {

  function onChange(ev) {
    let newValue = ev.target.value
    if(props.onValidate && props.regexp && props.regexp.test(String(newValue))){
      props.onValidate(newValue)
    }
    if(props.onChange){
      props.onChange(newValue)
    }
  }

  return (
    <input {...props} onChange={onChange}/>
  );
}

export default Input;
