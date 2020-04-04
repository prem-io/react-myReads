import React from 'react'
import SelectMenu from './SelectMenu'
import PropTypes from 'prop-types'

const Book = ({ book, updateShelf }) => {
  const { title, authors, imageLinks, shelf = 'none' } = book

  return (
    <div className="book">
      <div className="book-top">
        <BookCover imageLinks={imageLinks} />
        <SelectMenu shelf={shelf} book={book} updateShelf={updateShelf} />
      </div>
      <div className="book-title">
        {title}
      </div>
      {authors && authors.map(author => (
        <div key={author} className="book-authors">
          {author}
        </div>
      ))}
    </div>
  )
}

const BookCover = ({ imageLinks }) => {
  return (
    <div className="book-cover"
      style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks && imageLinks.thumbnail})` }}
    ></div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default Book
