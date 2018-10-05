import React, { Component } from 'react' 
import BookList from './BookList.js'


class Shelf extends Component {

	
	render() {
		return (
       	  <div className="bookshelf">	
	        <h2 className="bookshelf-title">Read</h2>
	          <ol className="books-grid">
	          	{this.props.books.filter(book => book.shelf === "read").map((book) => (
				  <BookList books={book}
				  key={book.id}
				  />
	          	))}
	          </ol>
            <h2 className="bookshelf-title">Currently Reading</h2>
              <ol className="books-grid">
            	{this.props.books.filter(book => book.shelf === "currentlyReading").map((book) => (
				  <BookList 
				  books={book}
				  key={book.id}
				  />
	          	))}
	          </ol>
            <h2 className="bookshelf-title">Want to Read</h2>
              <ol className="books-grid">
                {this.props.books.filter(book => book.shelf === "wantToRead").map((book) => (
				  <BookList books={book}
				  key={book.id}
				  />
	          	))}
	          </ol>
          </div>
			)
	}
}

export default Shelf

