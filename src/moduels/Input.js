import React, {useEffect,useState} from "react";

function Input(props) {



  const [isValid, setIsValid] = useState(null);

  useEffect(()=>{
    console.log('use effect')
  });

  function onChange(ev) {
    let newValue = ev.target.value;
    if(props.onValidate && props.regexp && props.regexp.test(String(newValue))){
      if(!props.onChange){
        props.onValidate(null);
        setIsValid(props.regexp.test(String(newValue)));
      }
    }
    if(props.onChange){
      props.onChange(newValue);
      console.log('onChange set ', props.regexp.test(String(newValue)))
      setIsValid(props.regexp.test(String(newValue)));
    }
  }
  const hidden = {
    opacity:  0,
    transition: 'opacity 0.25s'
  };
  const visible = {
    opacity:  1,
    transition: 'opacity 0.25s'
  };

  return (
      <div>
       <input {...props} onInput={onChange}/>
        {props.patternmessage? <span style = {isValid? hidden: visible}> {props.patternmessage}</span> : null}
      </div>
  );
}

export default Input;
