import React, { Component } from 'react'
/* This would be a controlled input value
*/

class FormInput extends Component {
  // onChange handler
  onChangeHandler() {
    // handle onChange, this needs to fire an action
    // the actions needs to know where this value is to be stored
    // maybe that is controlled just by the action name and the reducer knowing where that action name should be place in the store
  }
  render() {
    return (
      <input type="text" />
    )
  }
}

export default FormInput
