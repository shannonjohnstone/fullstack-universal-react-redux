import React, { Component } from 'react'
import { connect } from 'react-redux'
import { shape, string, number, func } from 'prop-types'
import { bindActionCreators } from 'redux'
import Button from '../ui/Button'
import { addToCartAction } from '../../actions/cartActions'

class BookItem extends Component {
  constructor(props) {
    super(props)
    this.addItemToCart = this.addItemToCart.bind(this)
  }
  addItemToCart(e, book) {
    e.preventDefault()
    const { addToCartAction: _addToCartAction } = this.props
    _addToCartAction(book)
  }
  render() {
    const { book, book: { title, description, price } } = this.props
    return (
      <li className="list-item">
        <div className="card">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>${price.toFixed(2)}</p>
          <Button
            buttonType="primary"
            value="Add to cart"
            onClick={e => this.addItemToCart(e, book)}
          />
        </div>
      </li>
    )
  }
}

BookItem.propTypes = {
  addToCartAction: func.isRequired,
  book: shape({
    title: string,
    description: string,
    price: number
  }).isRequired
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCartAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)
