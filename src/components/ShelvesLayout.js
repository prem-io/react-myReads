import React from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const ShelvesLayout = ({ books, updateShelf }) => {

  const shelves = [
    { shelf: "currentlyReading", title: "Currently Reading" },
    { shelf: "wantToRead", title: "Want To Read" },
    { shelf: "read", title: "Read" }
  ]

  return (
    <div className="list-books">
      {(Array.isArray(books) && books.length > 0)
        ? <div className="list-books-content">
          {shelves.map(s => (
            <Shelf
              key={s.shelf}
              title={s.title}
              books={books.filter(book => book.shelf === s.shelf)}
              updateShelf={updateShelf}
            />
          ))}
        </div>
        : <Loader />
      }
      <Link to='/search' className="open-search" >Add a book</Link>
    </div>
  )
}

export default ShelvesLayout
