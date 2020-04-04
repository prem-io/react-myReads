import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import './App.css'
import ShelvesLayout from './components/ShelvesLayout'
import SearchLayout from './components/SearchLayout'
import AppHeader from './components/AppHeader'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <AppHeader />
          <div className="app-container">
            <Route exact path="/" render={() => <Redirect to="/books" />} />
            <Route path='/books' component={ShelvesLayout} />
            <Route path='/search' component={SearchLayout} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
