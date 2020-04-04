import React from 'react';
import sortBy from 'sort-by';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = (props) => {
  const { title, books, updateShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.sort(sortBy('title')).map(book => (
            <li key={book.id}>
              <Book book={book} updateShelf={updateShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Shelf;