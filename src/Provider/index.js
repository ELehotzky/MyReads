import React, { Component } from 'react';
export const MyContext = React.createContext();

export default class index extends Component {
	
	constructor() {
		super();
		this.state = {
			books: [],
			currentlyReading: [],
			wantToRead: [],
			read: [],
			// Add books to shelves based on status.
			addBooks: (books) => {
				const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
				const read = books.filter((book) => book.shelf === "read");
				const wantToRead = books.filter((book) => book.shelf === "wantToRead");
				this.setState({
					books, 
					currentlyReading, 
					read, 
					wantToRead
				});
			},
			// If the user moves a book, check that it's not already on the shelf. If it isn't, move it.
			moveShelf: (book, newShelf, allShelves) => {
				console.log(newShelf);
				const newBooks = this.state.books.map(allBooks => {
					const foundId = allShelves[newShelf].find(
						bookId => bookId === allBooks.id);
					if (foundId) {
						allBooks.shelf = newShelf;
					}
					return allBooks;
				});
				this.state.addBooks(newBooks);
			}
		}
	}



	render() {
		return (
			<MyContext.Provider value={{...this.state}} >
				{this.props.children}
			</MyContext.Provider>
		);
	}
}
