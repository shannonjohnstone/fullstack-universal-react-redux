import React from 'react'

// TODO: move helper to helper file and write required test
function capitalizeFirstLetter(string) {
  return `${string.toLowerCase().charAt(0).toUpperCase()}${string.toLowerCase().slice(1)}`
}

const RenderField = (field) => {
  const { input, type, input: { name, meta } } = field
  console.log(input, 'input...')
  return (
    <fieldset className="form-group">
      <label htmlFor={name}>{capitalizeFirstLetter(name)}</label>
      <input type={type || 'text'} className="form-input" {...input} />
      {field.meta.touched && field.meta.error && <span className="error">{meta.error}</span>}
    </fieldset>
  )
}
export default RenderField
