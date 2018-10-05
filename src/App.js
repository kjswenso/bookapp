import React, { Component } from 'react'
import './App.css'
import Main from './Main.js'
import * as BooksAPI from './BooksAPI'


class App extends Component {

//https://reactjs.org/docs/state-and-lifecycle.html for initial state
  constructor(props) {
    super(props);
    this.state = { books : [] } 
  }
  

//Udacity lesson componentDidMount Lifecyle Event lesson for code 
  componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
     console.log(books);
  })
}

  render() {
    return (
      <div className="app">
        <Main books={this.state.books} />
      </div>
    );
  }
}

export default App