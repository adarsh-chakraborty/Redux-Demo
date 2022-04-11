import React, { useEffect } from 'react';
import Book from './components/Book';

import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from './actions/bookActions';

const Books = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.bookReducer);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className="flex flex-col gap-4">
      {data.map((book) => (
        <Book key={book._id} book={book.book} author={book.author} />
      ))}
    </div>
  );
};

export default Books;
