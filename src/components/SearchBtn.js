import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class SearchBtn extends Component {
	render() {
		return (
			<div className="open-search">
               <Link to={"/search"}></Link>
            </div>
		);
	}
}
