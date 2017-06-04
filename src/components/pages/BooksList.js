import React, { Component } from 'react'
import { connect } from 'react-redux'
import { arrayOf, object } from 'prop-types'
import { getBooks } from '../../actions/booksActions'
import Button from '../ui/Button'

class BooksList extends Component {
  static propTypes = {
    books: arrayOf(object).isRequired
  }
  componentDidMount() {
    this.props.getBooks()
  }
  render() {
    const books = this.props.books.map(book => (
      <li key={book.id}>
        <div>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <p>${book.price.toFixed(2)}</p>
          <Button buttonType="success" value="Add to cart" />
          <Button buttonType="primary" value="Add to cart" />
          <Button buttonType="danger" value="Add to cart" />
        </div>
      </li>
    ))
    return (
      <div className="row">
        <section className="center-col col-12-sm col-6">
          <h1>Books List</h1>
          <ul>
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
