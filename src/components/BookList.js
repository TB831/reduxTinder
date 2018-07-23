// Renders a list of books
import React, { Component } from 'react';

export default class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return <li key={book.title} className='list-group-item'></li>
    })
  }
  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}
