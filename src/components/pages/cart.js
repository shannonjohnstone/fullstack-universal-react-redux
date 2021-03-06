import React, { Component } from 'react'
import { shape, arrayOf, string, number, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCartAction, incrementDecrementQtyAction, removeItemFromCartAction } from '../../actions/cartActions'
import Button from '../ui/Button'

class Cart extends Component {
  static propTypes = {
    incrementDecrementQtyAction: func.isRequired,
    removeItemFromCartAction: func.isRequired,
    cart: arrayOf(shape({
      id: number,
      title: string,
      description: string,
      quantity: number,
      price: number
    })).isRequired
  }
  componentDidMount() {
    this.props.fetchCartAction()
  }
  incrementDecrementQty(e, id, type, cart) {
    e.preventDefault()
    this.props.incrementDecrementQtyAction(id, type, cart)
  }
  removeItemFromCart(e, id) {
    e.preventDefault()
    this.props.removeItemFromCartAction(id)
  }
  renderCart() {
    const cartItemList = this.props.cart.map(cartArr => (
      <div className="row" key={cartArr._id}>
        <ul className="list--clean col-12" key={cartArr._id}>
          <li className="col-12-sm col-4">
            <p className="truncate"><strong>{cartArr.title}</strong></p>
          </li>
          <li className="col-12-sm col-2">
            <p><strong>AU$</strong> {cartArr.price}</p>
          </li>
          <li className="col-12-sm col-2">
            <p><strong>QTY:</strong> {cartArr.quantity}</p>
          </li>
          <li className="col-12-sm col-2">
            <div className="row incrementDecrement">
              <button
                onClick={e => this.incrementDecrementQty(e, cartArr._id, 'increment', this.props.cart)}
                className="col-6 incrementDecrement__button incrementDecrement__button--left"
              >+
              </button>
              <button
                onClick={e => this.incrementDecrementQty(e, cartArr._id, 'decrement', this.props.cart)}
                className="col-6 incrementDecrement__button incrementDecrement__button--right"
              >-
              </button>
            </div>
          </li>
          <li className="col-12-sm col-2">
            <Button
              buttonType="danger"
              value="Delete"
              onClick={e => this.removeItemFromCart(e, cartArr._id)}
            />
          </li>
        </ul>
      </div>
    ))
    return (
      <div className="col-12 card">
        {cartItemList}
        <hr/>
        <p>Total qty: {this.props.totalQty}</p>
        <p>Total Amount: ${this.props.totalAmount}</p>
        <Button
          buttonType="success"
          value="Checkout"
          // onClick={e => this.removeItemFromCart(e, cartArr._id)}
        />
      </div>
    )
  }
  render() {
    if (this.props.cart[0]) return this.renderCart()
    return null
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount,
    totalQty: state.cart.totalQty
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCartAction,
    incrementDecrementQtyAction,
    removeItemFromCartAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
