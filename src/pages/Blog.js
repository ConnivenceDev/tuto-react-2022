import React from 'react';
import FormMessage from '../components/FormMessage';
import ListMessages from '../components/ListMessages';
import Logo from '../components/Logo';
import Nav from '../components/Nav';

const Blog = () => {

  return (
    <div className='blog-container'>
      <Logo />
      <Nav />
      <h1>
        Blog
      </h1>

      <FormMessage />

      <ListMessages />

    </div>
  );
};

export default Blog;