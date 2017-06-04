import React, { Component } from 'react'
import { FormInput } from '../../modules/FormUtil'

class BooksForm extends Component {
  render() {
    return (
      <div>
        <FormInput
          className="form-input"
          name="title"
          location="customer.title"
          type="text"
        />
      </div>
    )
  }
}

export default BooksForm
