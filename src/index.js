import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

//BrowserRouter from Udacity React Lesson 5: The Browser Router Component

ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>, 
	document.getElementById('root')
	)
