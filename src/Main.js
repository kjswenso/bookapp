import React, { Component } from 'react' 
import Shelf from './comps/Shelf.js'
import { Link } from 'react-router-dom'


class Main extends Component {

	render() {
		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
              <div className="list-books-content">
                  <Shelf books={this.props.books} 
                   switchShelf={this.props.switchShelf}
                  />
              </div>
              <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
            </div>
			)
	}
}

export default Main
