import React, { Component } from 'react';
import Book from "./Book.js"

export default class Bookshelf extends Component {
	render() {
		return (
			<div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books && this.props.books.map((book) => 
                        <Book key={book.id} {...book} moveShelf={this.props.moveShelf} /> )}
                    </ol>
                  </div>
                </div>
            </div>
		);
	}
}
