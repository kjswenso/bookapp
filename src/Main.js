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
                  <Shelf books={this.props.books} value="Read" />
             </div>
            </div>

			)
	}
}

export default Main
