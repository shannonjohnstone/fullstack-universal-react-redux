import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'

function Button({ buttonType, value }) {
  const btnClass = classNames({
    'btn--default': buttonType === 'default',
    'btn--primary': buttonType === 'primary',
    'btn--success': buttonType === 'success',
    'btn--danger': buttonType === 'danger',
  })
  return <button className={`btn ${btnClass}`}>{value}</button>
}

Button.propTypes = {
  buttonType: string,
  value: string.isRequired
}

Button.defaultProps = {
  buttonType: 'default'
}

export default Button
