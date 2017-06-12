import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import { number } from 'prop-types'
import { connect } from 'react-redux'
import { fetchCartAction } from './actions/cartActions'
import BooksList from './components/pages/BooksList'
import Cart from './components/pages/Cart'
import Admin from './components/pages/Admin'
import NavigationNew from './components/NavigationNew'
import Routes from './routes'

class App extends Component {
  static propTypes = {
    totalQty: number.isRequired
  }
  componentDidMount() {
    this.props.fetchCartAction()
  }
  render() {
    return (
      <div>
        <main className="container">
          <Routes />
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    totalQty: state.cart.totalQty
  }
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({ fetchCartAction }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProp)(App))
