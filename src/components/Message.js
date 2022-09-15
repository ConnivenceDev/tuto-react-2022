import axios from 'axios';
import React, { useState } from 'react';

const Message = ({ content }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");

  const saveEdit = (ev) => {
    const datas = {
      author: content.author,
      content: editContent ? editContent : content.content,
      date: content.date,
      updatedDate: Date.now()
    }

    if (datas.content.length >= 140) {
      axios.put('http://localhost:3004/articles/' + content.id, datas)
        .then(() => {
          setIsEditing(false)
        })
    }
  }

  const handleDelete = (ev) => {
    axios.delete("http://localhost:3004/articles/" + content.id).then(() => window.location.reload())


  }

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
    <li className="article" style={{ backgroundColor: isEditing ? "#f3feff" : "white" }}>
      <div className="card-header">
        <h2>
          {content.author}
        </h2>
        <em>
          Posté le {dateFormater(content.date)}
        </em>
      </div>
      {
        isEditing ?
          <textarea defaultValue={editContent ? editContent : content.content} onChange={(ev) => setEditContent(ev.target.value)} autoFocus>

          </textarea>
          :
          <p>
            {editContent ? editContent : content.content}
          </p>
      }

      <div className="btn-container">
        {
          isEditing ?
            <button onClick={(ev) => saveEdit(ev)}>Valider</button>
            :
            <button onClick={(ev) => setIsEditing(true)}>Modifier</button>
        }

        <button onClick={(ev) => {
          if (window.confirm("Voulez-vous vraiment supprimer ce message ?")) {
            handleDelete(ev);
          }
        }}>Supprimer</button>
      </div>
    </li>
  );
};

export default Message;