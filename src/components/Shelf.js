import React from 'react'
import Book from './Book'
import sortBy from 'sort-by'

const Shelf = (props) => {
  const { title, books, updateShelf } = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid scrollX">
          {books.sort(sortBy('title')).map(book => (
            <li key={book.id}>
              <Book book={book} updateShelf={updateShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Shelf
