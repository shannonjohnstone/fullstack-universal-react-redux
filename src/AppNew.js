import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Switch, Route } from 'react-router-dom'
import { number } from 'prop-types'
import { connect } from 'react-redux'
import { fetchCartAction } from './actions/cartActions'
import BooksList from './components/pages/BooksList'
import Cart from './components/pages/Cart'
import Admin from './components/pages/Admin'
import NavigationNew from './components/NavigationNew'

// const AppNew = () => (
class AppNew extends Component {
  static propTypes = {
    totalQty: number.isRequired
  }
  componentDidMount() {
    this.props.fetchCartAction()
  }
  render() {
    return (
      <div>
        {/* <NavigationNew /> */}
        <main className="container">
          {/* <Routes /> */}
          <Switch>
            <Route exact path="/" component={BooksList} />
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} /> */}
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default AppNew
