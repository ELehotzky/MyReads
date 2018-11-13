import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home.js"
import Search from "./components/Search.js"
import Provider, {MyContext} from "./Provider/"

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
      <Provider>
        <Switch>
          <Route exact path={"/"} render={ () => (
            <MyContext.Consumer>{context => <Home {...context} /> }
            </MyContext.Consumer> 
            )} />
          <Route exact path={"/search"} component={Search} />

        </Switch>
        </Provider>
      </div>
    )
  }
}

export default BooksApp
