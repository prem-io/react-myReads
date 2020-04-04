import React from 'react'
// import PropTypes from 'prop-types'

const Book = ({ book, updateShelf }) => {
  const { title, authors, imageLinks, shelf = 'none' } = book

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}
        ></div>
        <div className="book-shelf-changer">
          <select defaultValue={shelf} onChange={(e) => updateShelf(book, e.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      {authors && authors.map(author => (
        <div key={author} className="book-authors">
          {author}
        </div>
      ))}
    </div>
  )
}

// Book.propTypes = {
//   book: PropTypes.object.isRequired,
//   onMoveBook: PropTypes.func.isRequired
// }

export default Book
