import React from 'react';

const Book = (props) => {
  const { title, author, onClick } = props;

  return (
    <div className="book">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <button className='btn' onClick={onClick}>Click me</button>
    </div>
  );
};

export default Book;
