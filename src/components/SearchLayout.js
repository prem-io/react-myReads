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
    query = query.trim() // to remove any whitespace before and after the query string
    query
      ? BooksAPI.search(query)
        .then((response) => {
          const emptyResponse = !!response.error
          const results = emptyResponse ? [] : response

          results.forEach(item => {
            const myBook = this.props.books.find(book => book.id === item.id)
            if (myBook) item.shelf = myBook.shelf
          })

          this.setState({
            searchBooks: results,
            resultsFound: emptyResponse
          })
        })
      : this.setState({ searchBooks: [], resultsFound: false })
  }, 500)

  render() {
    const { searchBooks, resultsFound } = this.state

    return (
      <div className="search-books">
        <SearchBar onSearch={this.onSearch} />
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks.sort(sortBy('title')).map(book => (
              <li key={book.id}>
                <Book book={book} updateShelf={this.props.updateShelf} />
              </li>
            ))}
          </ol>
        </div>
        {resultsFound ? <div className="search-books-no-results">No Results</div> : null}
      </div>
    )
  }
}

export default SearchLayout
