import React, { Component } from 'react'
import './App.css'
import Main from './Main.js'
import * as BooksAPI from './BooksAPI'


class App extends Component {

//https://reactjs.org/docs/state-and-lifecycle.html for constructor state
  constructor(props) {
    super(props);
    this.state = { books: [] }
  }

//Udacity lesson componentDidMount Lifecyle Event lesson for code 
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