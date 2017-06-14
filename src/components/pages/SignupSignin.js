import React, { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from '../ui/Button'
import signupApi from '../../services/api/signupApi'

class SignupSignIn extends Component {
  static propTypes = {
    postBooks: func.isRequired
  }
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.signupForm = this.signupForm.bind(this)
    this.siginOrSignup = this.siginOrSignup.bind(this)
  }
  state = {
    signin: true
  }
  handleSubmit(e) {
    e.preventDefault()
    const { email, password } = this.refs // eslint-disable-line
    signupApi({ email, password })
  }
  signupForm(e) {
    e.preventDefault()
    this.setState({
      signin: !this.state.signin
    })
  }
  siginOrSignup(signin) {
    return <a href="" onClick={this.signupForm}>{signin ? 'Need an account, sign up here' : 'Already have an account, login here'}</a>
  }
  render() {
    return (
      <div>
        <div className="card">
          <h4>{this.state.signin ? 'Sign In' : 'Sign Up'}</h4>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Enter email" ref="email" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="Enter password" ref="description" className="form-input" />
            </div>
            <input type="submit" className="btn btn--primary" value="Submit" /> {this.siginOrSignup(this.state.signin)}
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(SignupSignIn)
