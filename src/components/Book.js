import React, { Component } from 'react';
import {update} from "../BooksAPI.js";

export default class Book extends Component {
	
    handleChange = async(event) => {
      try {
        const bookshelf = event.target.value
        const result = await update(this.props, bookshelf);
        this.props.moveShelf(this.props, bookshelf, result);
      } catch (error) {
        console.log(error)
      }
    }


  render() {
		return (
			<li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.authors[0]}</div>
        </div>
      </li>
		);
	}
}
