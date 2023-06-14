import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    { title: 'Thinking Fast and Slow', author: 'Cilian Murphy' },
    { title: 'Quiet', author: 'Susan Cian' },
    { title: 'Power of Your Subconscious Mind', author: 'Joseph R. Murphy' },
  ];

  const handleClick = (author) => {
    console.log(`You clicked the book of ${author}`);
  };

  return (
    <div>
      <h2 className='page-head'>Best-Selling Books in Amazon</h2>
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          onClick={() => handleClick(book.author)}
        />
      ))}
    </div>
  );
};

export default BookList;
