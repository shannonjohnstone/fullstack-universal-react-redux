import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
  renderCart() {
    const cartItemList = this.props.cart.map(cartArr => (
      <div className="card" key={cartArr.id}>
        <div className="row">
          <div className="col-12-sm col-4">
            <h5>{cartArr.title}</h5>
          </div>
        </div>
      </div>
    ))
    return (
      <div className="card">
        {cartItemList}
      </div>
    )
  }
  render() {
    if (this.props.cart[0]) {
      return this.renderCart()
    } else {
      return null
    }
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

export default connect(mapStateToProps)(Cart)
