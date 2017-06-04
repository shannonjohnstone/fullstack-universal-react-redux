import React, { Component } from 'react'
import { connect } from 'react-redux'
import { arrayOf, object, func } from 'prop-types'
import { getBooks } from '../../actions/booksActions'
import BookItem from './BookItem'

class BooksList extends Component {
  static propTypes = {
    books: arrayOf(object).isRequired,
    getBooks: func.isRequired
  }
  componentDidMount() {
    this.props.getBooks()
  }
  render() {
    const books = this.props.books.map(book => <BookItem key={book.id} book={book} />)
    return (
      <div className="row">
        <section className="center-col col-12-sm col-6">
          <h1>Books List</h1>
          <ul className="list--clean">
            {books}
          </ul>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps, { getBooks })(BooksList)
