import React, { Component } from 'react' 
import Shelf from './comps/Shelf.js'


class Main extends Component {

	render() {
		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
            <div className="list-books-content">
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                  <Shelf />
                <h2 className="bookshelf-title">Currently Reading</h2>
                  <Shelf />
                <h2 className="bookshelf-title">Want to Read</h2>
                  <Shelf />
              </div>
             </div>
            </div>

			)
	}
}

export default Main
