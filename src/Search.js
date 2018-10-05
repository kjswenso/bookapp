import React, { Component } from 'react' 
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {

/* Udacity React Lesson 3 State Management: Controlled Components
 * I followed the code in the videos for the contact list app
 * to update and bind my search component
 */
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query })
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
              <ol className="books-grid"></ol>
            </div>
          </div>
        );
	}
}

export default Search