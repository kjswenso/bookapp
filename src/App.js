import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList.js'


class App extends Component {
  render() {
    return (
      <div className="app">
        <BookList />
      </div>
    );
  }
}
export default App