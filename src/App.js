import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ShelvesLayout from './components/ShelvesLayout'
import SearchLayout from './components/SearchLayout'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({ books }))
      })
  }

  render() {
    console.log(this.state.books)

    return (
      <BrowserRouter>
        <div className="app">
          <Route path='/' component={ShelvesLayout} />
          <Route path='/search' component={SearchLayout} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
