import React, {useState} from 'react';
import "./index.scss"
import logo from "../../img/card_logo.svg"

function Header(props) {

  let headerButtons = props.buttons.map(button => {
    return(
      <button className={"header-button"} onClick={() => button.onClick()}>
        {button.text}
      </button>
    )
  })

  return ([
    <div className={"hider"}/>,
    <div className={"header"}>
      <img src={logo}/>
      {headerButtons}
    </div>
  ]);
}

export default Header;
