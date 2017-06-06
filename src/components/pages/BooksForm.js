import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postBooks } from '../../actions/booksActions'
// import { findDOMNode} from 'react'

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
    const { id } = this.props.books[this.props.books.length - 1]
    this.props.postBooks([{
      id: id + 1,
      title: title.value,
      description: description.value,
      price: typeof price.value !== 'number' ? parseFloat(price.value) : price.value
    }])
  }
  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="Enter title" ref="title" className="form-input" />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" placeholder="Enter description" ref="description" className="form-input" />
          <label htmlFor="price">Price</label>
          <input type="text" name="price" placeholder="Enter price" ref="price" className="form-input" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postBooks }, dispatch)
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm)
