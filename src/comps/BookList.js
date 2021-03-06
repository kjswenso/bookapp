import React, { Component } from 'react'


class BookList extends Component {

	render() {

    //CL Mason caught that I was filtering out books and suggested this correction
    let bookImage = this.props.books.imageLinks ? 
      this.props.books.imageLinks.thumbnail : ''

		return (
		  <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage})` }}></div>
            <div className="book-shelf-changer">
              <select value={this.props.books.shelf} 
              onChange={(e) => {
                this.props.switchShelf(this.props.books, e.target.value)
              }}>
                <option value="move">Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.books.title}</div>
          <div className="book-authors">{this.props.books.authors}</div>
        </div>

		);
	}
}

export default BookList
