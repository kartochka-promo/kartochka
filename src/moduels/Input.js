import React, {useState} from "react";

function Input(props) {

  let [value, setValue] = useState("")

  const [isValid, setIsValid] = useState(false);

  function onChange(ev) {

    setValue(ev.target.value)
    console.log(value)

    let newValue = ev.target.value;
    if(props.onValidate && props.regexp){
      let isValidValue = props.regexp.test(String(newValue));
      if(!props.onChange){
        props.onValidate({value:newValue, valid: isValidValue});
        setIsValid(isValidValue);
      } else{
        props.onChange();
        setIsValid(isValidValue);
      }
      props.onValidate(newValue)
    }
    if(props.onChange){
      props.onChange(newValue)
    }
  }

  return (
      <div>
       <input {...props} onChange={(ev) => onChange(ev)} value={value}/>
        {props.patternmessage? <span style = {isValid? "hidden": "visible"}> {props.patternmessage}</span> : null}
      </div>
  );
}

export default Input;
