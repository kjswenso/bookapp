import React, { Component } from 'react'
import './App.js'
import * as BooksAPI from './BooksAPI.js'

class Books extends Component {
	state = {
		books: []
		}
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}


  render() {
  	return (
  		<ol className='book-list'> 

  		</ol> 
  		)
  }
}

export default Books