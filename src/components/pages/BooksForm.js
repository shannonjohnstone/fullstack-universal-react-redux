import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postBooksAction, deleteBooks } from '../../actions/booksActions'
import Button from '../ui/Button'

class BooksForm extends Component {
  static propTypes = {
    postBooks: func.isRequired
  }
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const { title, description, price } = this.refs // eslint-disable-line
    // NOTE: this id allocation is a temp fix until we add a database
    // const { _id } = this.props.books[this.props.books.length - 1]
    this.props.postBooksAction([{
      title: title.value,
      description: description.value,
      price: typeof price.value !== 'number' ? parseFloat(price.value) : price.value
    }])
  }
  render() {
    return (
      <div>
        <div className="card">
          <h4>Add Book</h4>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" placeholder="Enter title" ref="title" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" name="description" placeholder="Enter description" ref="description" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input type="text" name="price" placeholder="Enter price" ref="price" className="form-input" />
            </div>
            <input type="submit" className="btn btn--primary" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postBooksAction, deleteBooks }, dispatch)
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm)
