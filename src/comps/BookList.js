import React, { Component } from 'react'
//import * as BooksAPI from './BooksAPI.js'

class BookList extends Component {
	render() {
		return (
		<ol className='book-list'>
		  {this.props.books.map((book) => (
		  	<li key={book.title} className='book-list-title'>
		  	  {book.title}
		  	  <br />
		  	  {book.author}
		  	</li>
		  	))}
		</ol>
		);
	}
}

export default BookList