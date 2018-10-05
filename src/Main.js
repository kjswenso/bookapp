import React, { Component } from 'react' 
import Shelf from './comps/Shelf.js'
import PropTypes from 'prop-types'



class Main extends Component {

	static propTypes = {
	    books: PropTypes.array.isRequired,
	    onSwitchShelf: PropTypes.func.isRequired
  }

	render() {
		return (
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
              <div className="list-books-content">
                  <Shelf books={this.props.books} 
                   onSwitchShelf={this.switchShelf}
                  />
              </div>
            </div>
			)
	}
}

export default Main
