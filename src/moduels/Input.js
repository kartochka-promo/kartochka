import React, {useEffect, useState} from "react";

function Input(props) {



  const [isValid, setIsValid] = useState(true);


  function onChange(ev) {
    let newValue = ev.target.value;
    if(props.onValidate && props.regexp && props.regexp.test(String(newValue))){
      if(!props.onChange){
        props.onValidate(null);
        setIsValid(props.regexp.test(String(newValue)));
        console.log('is valid', newValue, isValid)
      }
    }
    if(props.onChange){
      props.onChange(newValue);
      setIsValid(props.regexp.test(String(newValue)));
      console.log('is valid', newValue, isValid)
    }
  }

  return (
      <div>
    <input {...props} onChange={onChange}/>
       <span>{isValid?'true': 'false'}</span>
      </div>
  );
}

export default Input;
