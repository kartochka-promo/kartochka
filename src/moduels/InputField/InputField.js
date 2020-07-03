import React, {useEffect,useState} from "react";

function InputField(props) {



  const [isValid, setIsValid] = useState(false);

  useEffect(()=>{

  });

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
  const hidden = {
    opacity:  0,
    transition: 'opacity 0.25s'
  };
  const visible = {
    opacity:  1,
    transition: 'opacity 0.25s'
  };

  const correct ={
    borderColor: ' #FA9917',
  };
  const incorrect ={
    borderColor: 'black',
  }

  return(
      <div className={"input-field"} style={props.hidden? hidden : visible} >
        <label>{props.text} </label>
        <div className={"input-field__container"}>
          <input style = {isValid? correct: incorrect} className={"input-field__container_input"} type = {props.type} onChange={onChange} />
          {props.patternmessage? <span style = {isValid? hidden: visible}> {props.patternmessage}</span> : null}
        </div>
      </div>
  );

}

export default InputField;
