"use client";

import { useState } from "react";

export default function NewTweet() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  function btnPublishClick() {
    alert(text);
    // setMessage("Enviando seu tweet para a blockchain...aguarde...");
    // addTweet(text)
    //   .then((result) => {
    //      setText("");
    //      setMessage("Tweet foi enviado. Aguarde um minuto para atualizar.");
    //    })
    //    .catch((err) => {
    //       setMessage(err.message);
    //       console.error(err);
    //     });
  }

  return (
    <>
      <div className="top">
        <div className="left">
          <img src="/twitter.svg" className="brand" />
        </div>
        <h1>Bem vindo de volta!</h1>
        <p>O que está acontecendo?</p>
        <textarea
          className="form-control my-3"
          value={text}
          onChange={(evt) => setText(evt.target.value)}
        ></textarea>
        <div>
          <input
            type="button"
            onClick={btnPublishClick}
            className="btn btn-primary"
            value="Enviar"
          />
          <span className="message">{message}</span>
        </div>
      </div>
    </>
  );
}
