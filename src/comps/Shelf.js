import React, { Component } from 'react' 
import BookList from './BookList.js'

class Shelf extends Component {
	render() {
		return (
			       <div className="bookshelf-books">
                    <ol className="books-grid">
                      <BookList />
                    </ol>
                    </div>
			)
	}
}

export default Shelf