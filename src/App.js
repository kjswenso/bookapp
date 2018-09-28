import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './Main.js'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { books: [] }
  }

  componentDidMount() {
  BooksAPI.getAll().then((res) => {
    this.setState({ books: res })
     console.log(res);
  })
}

  render() {
    return (
      <div className="app">
        <Main />
      </div>
    );
  }
}
export default App