import React from 'react'
import { string, func } from 'prop-types'
import classNames from 'classnames'

function Button({ buttonType, value, onClick, disabled }) {
  const btnClass = classNames({
    'btn--default': buttonType === 'default',
    'btn--primary': buttonType === 'primary',
    'btn--success': buttonType === 'success',
    'btn--danger': buttonType === 'danger',
  })
  return <button className={`btn ${btnClass}`} onClick={onClick} disabled={disabled}>{value}</button>
}

Button.propTypes = {
  buttonType: string,
  value: string.isRequired,
  onClick: func.isRequired
}

Button.defaultProps = {
  buttonType: 'default'
}

export default Button
