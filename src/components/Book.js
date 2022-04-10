import React from 'react';

const Book = ({ author, book }) => {
  return (
    <div className="flex flex-col items-center p-2 border rounded-sm shadow-md">
      <h2 className="text-2xl font-bold">{book}</h2>
      <p className="w-max  text-gray-600 font-mono">{author}</p>
    </div>
  );
};

export default Book;
