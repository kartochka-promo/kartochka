import React, {useState} from "react";

function Input(props) {

  let [value, setValue] = useState("")

  function onChange(ev) {
    let newValue = ev.target.value;
    setValue(newValue);
    if(props.onValidate && props.regexp){
      props.onValidate(props.regexp.test(String(newValue)));
    }
    if(props.onChange){
      props.onChange(newValue);
    }
  }

  return (
       <input {...props} onChange={onChange} value={props.value?props.value:value}/>
  );
}

export default Input;
