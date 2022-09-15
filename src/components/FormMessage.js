import axios from 'axios';
import React, { useState } from 'react';

const FormMessage = ({ getData }) => {

  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (content.length < 140) {
      setError(true);
    }
    else {
      setError(false);
      axios
        .post("http://localhost:3004/articles", {
          author,
          content,
          date: Date.now()
        })
        .then(() => {
          setAuthor("");
          setContent("");
          getData();
        })
    }
  }

  return (
    <form onSubmit={(ev) => handleSubmit(ev)}>
      <input type="text" placeholder='Nom' onChange={(ev) => {
        setAuthor(ev.target.value);
      }} value={author} />
      <textarea style={{ border: error ? "1px solid red" : "1px solid #61dafb" }} placeholder='Message' onChange={(ev) => {
        setContent(ev.target.value);
      }} value={content}></textarea>
      {
        error &&
        <p>Veuillez écrire un minimum de 140 caractères</p>
      }

      <input type="submit" value="Envoyer" />

    </form>
  );
};

export default FormMessage;