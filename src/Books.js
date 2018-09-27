import React, { Component } from 'react'
import './App.js'
import * as BooksAPI from './BooksAPI.js'

class Books extends React.Component {
	render() {
		const books = [
			{ book: 'HP1'},
			{ book: 'HP2'},
			{ book: 'HP3'}
		]

	return {}
	}


	/*state = {
		books: []
		}
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}*/


  render() {
  	return (
  		<div className='books-list'>
  			<ol></ol> 
  		</div>
  		)
  }
}

export default Books