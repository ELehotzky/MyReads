import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {search, getAll} from "../BooksAPI.js";
import Book from "./Book.js"

export default class Search extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			searchInput: "",
			books: []
		}
	}

	async componentDidMount() {
		try {
			const books = await getAll();
			this.props.addBooks(books);
		} catch(error) {
			console.log(error)
		}
	}

	handleChange = async (event) => {
		try {
			const searchInput = event.target.value;
			this.setState({searchInput})
			if (searchInput.trim()) {
				const results = await search(searchInput);
				if (results.error) {
					this.setState({books: [] })
				} else {
					this.setState({books: results});
				}
			} else {
				this.setState({books: [] })
			}
		} catch(error) {
			console.log(error)
		}
	}

	render() {
		return (
			<div className="search-books">
            	<div className="search-books-bar">
              	<Link to={"/"} className="close-search" >Close</Link>
              		<div className="search-books-input-wrapper">
                	<input type="text" value={this.state.searchInput} onChange={this.handleChange} placeholder="Search by title or author" />
              		</div>
           		 </div>
            <div className="search-books-results">
              <ol className="books-grid">
              	{this.state.books.length >= 1 && this.state.books.map((book) => {
              		const foundShelf = this.state.books.find(
              			(searchBook) => searchBook.id === book.id )
              		if (foundShelf) {
              			book.shelf = foundShelf.shelf;
              		} else {
              			book.shelf = "none";
              		}
              		return (
              			<Book key={book.id} {...book} shelf={foundShelf} moveShelf={this.props.moveShelf} /> 
              		);
              	})}
              		{this.state.length === 0 && <h1>No Results Found</h1> }
              </ol>
            </div>
          </div>
		);
	}
}
