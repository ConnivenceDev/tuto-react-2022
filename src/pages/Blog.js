import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FormMessage from '../components/FormMessage';
import Message from '../components/Message';
import Logo from '../components/Logo';
import Nav from '../components/Nav';

const Blog = () => {

  const [comments, setComments] = useState([]);

  const getData = () => {
    axios.get("http://localhost:3004/articles")
      .then((res) => {
        setComments(res.data)
      })
  }

  useEffect(() => getData(), []);

  return (
    <div className='blog-container'>
      <Logo />
      <Nav />
      <h1>
        Blog
      </h1>

      <FormMessage getData={getData} />

      <ul>
        {
          comments
            .sort((a, b) => (b.date - a.date))
            .map((comment) => (<Message content={comment} key={comment.id} />))
        }
      </ul>

    </div>
  );
};

export default Blog;