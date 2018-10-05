import React, { Component } from 'react' 
import BookList from './BookList.js'
import PropTypes from 'prop-types'

class Shelf extends Component {

	static propTypes = {
	    books: PropTypes.array.isRequired,
	    onSwitchShelf: PropTypes.func.isRequired
  }
	
	render() {
		return (
       	  <div className="bookshelf">	
	        <h2 className="bookshelf-title">Read</h2>
	          <ol className="books-grid">
	          	{this.props.books.filter(book => book.shelf === "read").map((book) => (
				  <BookList books={book}
				  key={book.id}
				  onSwitchShelf={this.switchShelf}
				  />
	          	))}
	          </ol>
            <h2 className="bookshelf-title">Currently Reading</h2>
              <ol className="books-grid">
            	{this.props.books.filter(book => book.shelf === "currentlyReading").map((book) => (
				  <BookList 
				  books={book}
				  key={book.id}
				  onSwitchShelf={this.switchShelf}
				  />
	          	))}
	          </ol>
            <h2 className="bookshelf-title">Want to Read</h2>
              <ol className="books-grid">
                {this.props.books.filter(book => book.shelf === "wantToRead").map((book) => (
				  <BookList books={book}
				  key={book.id}
				  onSwitchShelf={this.switchShelf}
				  />
	          	))}
	          </ol>
          </div>
			)
	}
}

export default Shelf

