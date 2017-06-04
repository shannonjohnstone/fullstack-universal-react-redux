import React, { Component } from 'react'
import { arrayOf, object } from 'prop-types'

import { connect } from 'react-redux'

class BooksList extends Component {
  static propTypes = {
    books: arrayOf(object).isRequired
  }
  render() {
    const books = this.props.books.map(book => <li key={book.id}>{book.title}</li>)
    return (
      <section>
        <h1>Books List</h1>
        <ul>
          {books}
        </ul>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps)(BooksList)
