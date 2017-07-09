import React, { Component } from 'react';
import BookList from "./book_list.js"
import BookAdd from "./book_add.js"
import BookDetails from "./BookDetails.js"
import LoadDetails from "./LoadDetails"

export default class App extends Component {
  render() {
    return (
      <div>
        <p>React simple starter </p>
        <LoadDetails /> 
        <div> 
          <BookAdd /> 
          <BookList />
          <BookDetails />
        </div>
      </div>
    );
  }
}
