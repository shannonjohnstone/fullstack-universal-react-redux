import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    }
  ]
]

class Navigation extends Component {
  render() {
    const checkIfCartMenuItem = item => (
      (item.url === '/cart' && this.props.totalQty > 0) && <Badge className="badge" totalQty={this.props.totalQty} />)

    const navItemsLeft = navConfig[0].map(item => (
      <li key={item.url} className="list-item navigation__list-item"><Link to={item.url}>{item.page}</Link></li>))

    const navItemsRight = navConfig[1].map(item => (
      <li key={item.url} className="list-item navigation__list-item"><Link to={item.url}>{item.page}</Link>{checkIfCartMenuItem(item)}</li>))

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
                {navItemsLeft}
              </ul>
            </li>
            <li className="list-item navigation__list-item navigation__list--right">
              <ul className="list--clean navigation__list">
                {navItemsRight}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navigation
