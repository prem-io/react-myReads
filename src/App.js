import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
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
          <Route exact path='/' component={ShelvesLayout} />
          <Route path='/search' component={SearchLayout} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
