import React from 'react';

const Message = ({ content }) => {

  const dateFormater = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
  }

  return (
    <li className="article">
      <div className="card-header">
        <h2>
          {content.author}
        </h2>
        <em>
          Posté le {dateFormater(content.date)}
        </em>
      </div>
      <p>
        {content.content}
      </p>
      <div className="btn-container">
        <button>Modifier</button>
        <button>Supprimer</button>
      </div>
    </li>
  );
};

export default Message;