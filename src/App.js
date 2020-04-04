import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ShelvesLayout from './components/ShelvesLayout'
import SearchLayout from './components/SearchLayout'
import AppHeader from './components/AppHeader'
class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({ books }))
      })
  }

  updateShelf = (book, shelf, prevShelf) => {
    prevShelf === "none"
      ? this.setState(prevState => ({
        books: prevState.books.concat([{ ...book, shelf }])
      }))
      : this.setState(prevState => ({
        books: prevState.books.map(b =>
          b.id === book.id ? { ...b, shelf } : b
        )
      }))

    BooksAPI.update(book, shelf)
  };

  render() {
    const { books } = this.state

    return (
      <BrowserRouter>
        <div className="app">
          <AppHeader />
          <div className="app-container">
            <Route
              exact path="/"
              render={() => (
                <ShelvesLayout
                  books={books}
                  updateShelf={this.updateShelf}
                />
              )}
            />
            <Route
              path='/search'
              render={() => (
                <SearchLayout
                  books={books}
                  updateShelf={this.updateShelf}
                />
              )}
            />
            <Redirect fro="*" to="/" />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
