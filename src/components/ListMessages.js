import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Message from './Message';

const ListMessages = () => {

  const [comments, setComments] = useState([]);

  const getData = () => {
    axios.get("http://localhost:3004/articles")
      .then((res) => {
        setComments(res.data)
      })
  }

  useEffect(() => getData(), [])

  return (
    <ul>
      {
        comments
          .sort((a, b) => (b.date - a.date))
          .map((comment) => (<Message content={comment} key={comment.id} />))
      }
    </ul>
  );
};

export default ListMessages;