import React, { Component } from 'react' 
import * as BooksAPI from './BooksAPI'
import BookList from './comps/BookList.js'

class Search extends Component {

/* Udacity React Lesson 3 State Management: Controlled Components
 * I followed the code in the videos for the contact list app
 * to update and bind my search component
 */
	state = {
		query: '',
		showingBooks: []
	}

	updateQuery = (query) => {
		this.setState({ query })
		this.searchBooks(query)
	}

//CL Mason through Slack DM helped turn this search that didn't work into the one below to avoid errors
	/*searchBooks = (query) => {
		if (query) {
			BooksAPI.search(query).then(searched) => {
				this.setState({ showingBooks: searched })
			} else {
				this.setState({ showingBooks: [] })
			}
			return search
		}
	}*/

	searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searched) => {
      	if (searched.error) {
      		this.setState( { showingBooks: [] })
      	} else {
          	this.setState({ showingBooks: searched })
    	}
      })
    }else {
      this.setState({ showingBooks: [] })
    }
  }

	clearQuery = () => {
			this.setState({ query : '' })
		}

	render() {
		return(
		  <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author"
				  value={this.state.query}
				  onChange={(e) => this.updateQuery(e.target.value)}
                  />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                 {this.state.showingBooks.filter((book) => book.imageLinks).map((book, shelf) => (
		            <BookList 
		              books={ book } 
		              key={ book.id }
		              switchShelf={this.props.switchShelf}
		            />
              	))}
              </ol>
            </div>
          </div>
        );
	}
}

export default Search
