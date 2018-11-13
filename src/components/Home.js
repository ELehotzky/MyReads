import React, { Component } from 'react';
import Bookshelf from "./Bookshelf.js"
import AddBook from "./AddBook.js"
import {getAll} from "../BooksAPI.js"

export default class Home extends Component {

	async componentDidMount() {
		try {
			const books = await getAll();
			this.props.addBooks(books);
		} catch(error) {
			console.log(error)
		}
	}



	render() {
		return (
			          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelf title="Currently Reading" books={this.props.currentlyReading} />
              <Bookshelf title="Want to Read" books={this.props.wantToRead} />
              <Bookshelf title="Read" books={this.props.read} />
            </div>
            <AddBook />
          </div>
		);
	}
}
