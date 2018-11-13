import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {search} from "../BooksAPI.js";
import Book from "./Book.js"

export default class Search extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			searchInput: "",
			books: []
		}
	}



	handleChange = async event => {
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
              	{this.state.books.length > 0 && this.state.books.map((book) => 
              		<Book key={book.id} {...book} moveShelf={this.props.moveShelf} 
              	/>)}
              </ol>
            </div>
          </div>
		);
	}
}
