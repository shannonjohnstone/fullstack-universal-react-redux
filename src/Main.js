import React, { PureComponent } from 'react'
import { number } from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createBrowerHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'
import Navigation from './components/Navigation'
import BooksList from './components/pages/BooksList'
import Cart from './components/pages/Cart'
import Admin from './components/pages/Admin'

const customHistory = createBrowerHistory()

class Main extends PureComponent {
  static propTypes = {
    totalQty: number.isRequired
  }
  render() {
    const { totalQty } = this.props
    return (
      <Router history={customHistory}>
        <div>
          <Navigation totalQty={totalQty} />
          <div className="container">
            <Route exact path="/" component={BooksList} />
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} /> */}
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/cart" component={Cart} />
          </div>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    totalQty: state.cart.totalQty
  }
}

export default connect(mapStateToProps)(Main)
