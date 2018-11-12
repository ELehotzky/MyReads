import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home.js"
import Search from "./components/Search.js"

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/search"} component={Search} />
        </Switch>

      </div>
    )
  }
}

export default BooksApp
