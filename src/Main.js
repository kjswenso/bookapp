import React, { Component } from 'react' 
import BookList from './comps/BookList.js'
import Shelf from './comps/Shelf.js'

class Main extends Component {
	render() {
		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
            <div className="list-books-content">
                <Shelf />
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        <BookList />
                    </ol>
                  </div>
                </div>
                </div>

			)
	}
}

export default Main