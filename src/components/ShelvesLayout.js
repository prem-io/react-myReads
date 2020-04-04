import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
class ShelvesLayout extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({ books }))
      })
  }

  updateShelf = (book, shelf) => {

    this.setState((prevState) => ({
      books: prevState.books.map(b => b.id === book.id ? { ...b, shelf } : b)
    }))

    BooksAPI.update(book, shelf)
  };

  render() {
    const { books } = this.state
    console.log(books)

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
                updateShelf={this.updateShelf}
              />
            ))}
          </div>
          : <div>Loading...</div>
        }
        <Link to='/search' className="open-search" >Add a book</Link>
      </div>
    )
  }
}

export default ShelvesLayout
