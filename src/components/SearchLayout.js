import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import sortBy from 'sort-by'
import SearchBar from './SearchBar'
import Book from './Book'
import { debounce } from '../util'
class SearchLayout extends Component {
  state = {
    searchBooks: [],
    resultsFound: false
  }

  onSearch = debounce((query) => {
    query
      ? BooksAPI.search(query)
        .then((books) => {
          if (Array.isArray(books)) {
            this.setState({ searchBooks: books })
          } else {
            this.setState({ resultsFound: true })
          }
        })
      : this.setState({ searchBooks: [], resultsFound: false })
  }, 1000)

  updateShelf = (book, shelf) => {

    this.setState((prevState) => ({
      searchBooks: prevState.searchBooks.filter(b => b.id !== book.id)
    }))

    BooksAPI.update(book, shelf)
  };

  render() {
    console.log(this.state)
    const { searchBooks, resultsFound } = this.state

    return (
      <div className="search-books">
        <SearchBar onSearch={this.onSearch} />
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks.sort(sortBy('title')).map(book => (
              <li key={book.id}>
                <Book book={book} updateShelf={this.updateShelf} />
              </li>
            ))}
          </ol>
        </div>
        {resultsFound ? <div>No Results</div> : null}
      </div>
    )
  }
}

export default SearchLayout
