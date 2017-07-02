import React, { Component } from 'react'
import { number } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Badge from './Badge'

const navConfig = [
  [
    {
      page: 'BookShop',
      url: '/'
    },
    {
      page: 'About',
      url: '/about'
    },
    {
      page: 'Contact us',
      url: '/contact'
    }
  ],
  [
    {
      page: 'Admin',
      url: '/admin'
    },
    {
      page: 'Your cart',
      url: '/cart'
    },
    {
      page: 'Sign In',
      url: '/signin'
    }
  ]
]

const checkIfCartMenuItem = (item, totalQty) => (
    (item.url === '/cart' && totalQty > 0) && <Badge className="badge" totalQty={totalQty} />)

const signinOrSignOut = (item, totalQty, isLoggedIn = false) => (
  (item.url === '/signin' && isLoggedIn) ?
    <a href="/signout">Sign out</a> :
    <Link to={item.url}>{item.page}{checkIfCartMenuItem(item, totalQty)}</Link>
)

function renderNav(_navConfig, index, totalQty) {
  return _navConfig[index].map(item => (
    <li key={item.url} className="list-item navigation__list-item">{signinOrSignOut(item, totalQty)}</li>))
}

class NavigationNew extends Component {
  static propTypes = {
    totalQty: number.isRequired
  }
  render() {
    function destroySession() {
      axios({ method: 'post', url: 'api/services/v1/cart/endSession'})
    }
    const { totalQty } = this.props
    return (
      <nav className="row navigation">
        <div className="container">
          <input type="checkbox" id="show-menu" role="button" />
          <label htmlFor="show-menu" className="show-menu">
            <div className="toggle"><span className="toggle__span"></span></div>
          </label>
          <ul className="list--clean navigation__list">
            <li className="list-item navigation__list-item navigation__list-item--left">
              <ul className="list--clean navigation__list">
                {renderNav(navConfig, 0)}
              </ul>
            </li>
            <li className="list-item navigation__list-item navigation__list--right">
              <ul className="list--clean navigation__list">
                {renderNav(navConfig, 1, totalQty)}
              </ul>
            </li>
          </ul>
        </div>
        <ul className="list--clean navigation__list">
          <li><button onClick={destroySession}>🔥</button></li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    totalQty: state.cart.totalQty
  }
}

export default connect(mapStateToProps)(NavigationNew)
