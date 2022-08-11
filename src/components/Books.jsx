import React from 'react';
import Book from './Book';
import AddBookForm from './AddBookForm';

const Books = () => (
  <div>
    <Book title="Rich Dad" author="Robert Kiyosaki" />
    <AddBookForm />
  </div>
);

export default Books;