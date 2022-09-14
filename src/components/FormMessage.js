import React, { useState } from 'react';

const FormMessage = () => {

  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (content.length < 140) {
      setError(true);
    }
    else {
      setError(false);
    }
  }

  return (
    <form onSubmit={(ev) => handleSubmit(ev)}>
      <input type="text" placeholder='Nom' />
      <textarea style={{ border: error ? "1px solid red" : "1px solid #61dafb" }} placeholder='Message' onChange={(ev) => {
        setContent(ev.target.value);
      }}></textarea>
      {
        error &&
        <p>Veuillez écrire un minimum de 140 caractères</p>
      }

      <input type="submit" value="Envoyer" />

    </form>
  );
};

export default FormMessage;