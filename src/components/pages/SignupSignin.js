import React, { Component } from 'react'
import { reduxForm, Field, change } from 'redux-form'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import RenderField from '../reduxForm/renderField'
import signinSignoutAction from '../../actions/signinSignoutActions'

class SignupSignIn extends Component {
  static propTypes = {
    handleSubmit: func.isRequired,
    dispatch: func.isRequired
  }
  constructor(props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.signupForm = this.signupForm.bind(this)
    this.siginOrSignup = this.siginOrSignup.bind(this)
  }
  state = {
    signin: true
  }
  handleFormSubmit({ email, password }) {
    if (this.state.signin) {
      // signin, does sigin flow saves isLoggedin and token to the store
      // signinApi({ email, password }
      this.props.dispatch(signinSignoutAction({ email, password }))
    } else {
      // signup, does sigup flow creates the user saves isLoggedin and token to the store and logs them in
      // signupApi({ email, password })
    }
  }
  signupForm(e) {
    e.preventDefault()
    this.props.dispatch(change('SignupSignIn', 'email', ''))
    this.props.dispatch(change('SignupSignIn', 'password', ''))
    this.setState({
      signin: !this.state.signin
    })
  }
  siginOrSignup(signin) {
    return <a href="" onClick={this.signupForm}>{signin ? 'Need an account, sign up here' : 'Already have an account, login here'}</a>
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <div className="card">
          <h4>{this.state.signin ? 'Sign In' : 'Sign Up'}</h4>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>
            <Field
              name="email"
              component={RenderField}
            />
            <Field
              name="password"
              type="password"
              component={RenderField}
            />
            <input type="submit" className="btn btn--primary" value="Submit" /> {this.siginOrSignup(this.state.signin)}
          </form>
        </div>
      </div>
    )
  }
}

const SignupSignInForm = reduxForm({
  form: 'SignupSignIn',
  destroyOnUnmount: false,
  fields: ['email', 'password'],
  initialValues: {
    email: '',
    password: ''
  }
})(SignupSignIn)

export default connect()(SignupSignInForm)
