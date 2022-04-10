import React, { useState, useEffect } from 'react';
import Book from './components/Book';

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('https://bookshelf.gq/api/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4">
      {books.map((book) => (
        <Book book={book.book} author={book.author} />
      ))}
    </div>
  );
};

export default Books;
