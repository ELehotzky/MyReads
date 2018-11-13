import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {search} from "../BooksAPI.js";

export default class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchInput: ""
		}
	}
	
	handleChange = async(event) => {
		try {
			const searchInput = event.target.value;
			this.setState({searchInput});
			const results = await search(searchInput)
			console.log(results)
		} catch(error) {
			console.log(error);
		}
	}


	render() {
		return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to={"/"}>Home</Link>
              <div className="search-books-input-wrapper">

                <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.searchInput} />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
		);
	}
}
