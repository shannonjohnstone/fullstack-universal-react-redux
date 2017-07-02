import React from 'react'
import { Route } from 'react-router-dom'
import BooksList from './components/pages/BooksList'
import Cart from './components/pages/Cart'
import Admin from './components/pages/Admin'
import SignupSignIn from './components/pages/SignupSignin'

const Routes = () => (
  <div>
    <Route exact path="/" component={BooksList} />
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/signin" component={SignupSignIn} />
  </div>
)

export default Routes
