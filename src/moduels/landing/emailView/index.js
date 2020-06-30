import React, {useState} from 'react';
import "./index.scss"
import Input from "../../Input";

function EmailView() {

  const [email, setEmail] = useState("")

  return (
    <div className={"email-view"}>
      <h2>Заинтересовались? Оставьте контакт!</h2>
      <div className={"email-flex"}>
        <Input
          onChange={(val) => setEmail(val)}
        />
        <button
          className={"action-button stretch email-button"}
          onClick={() => {
            alert(email)
          }}
        >
          отправить
        </button>
      </div>
    </div>
  );
}

export default EmailView;
