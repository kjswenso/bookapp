import React, { Component } from 'react'
import './App.css'
import Main from './Main.js'
import Search from './Search.js'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'


class App extends Component {

//https://reactjs.org/docs/state-and-lifecycle.html for initial state
  constructor(props) {
    super(props);
    this.state = { books : [] } 
  }

 componentDidMount() {
    this.getBooks()
  }   

/*use BooksAPI to get books array to map through for display
 *store in function to reuse same code
 */
  getBooks() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
     console.log(books)
  })
}

 switchShelf = (book, shelf) =>  {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks()
    });
  }



  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <Search books={this.state.books}
           switchShelf={this.switchShelf}
           />
        )} />
        <Route exact path="/" render={() => (
          <Main books={this.state.books} 
           switchShelf={this.switchShelf}
          />
        )} />
      </div>
    );
  }
}

export default App