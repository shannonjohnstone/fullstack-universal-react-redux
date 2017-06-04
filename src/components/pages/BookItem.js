import React from 'react'
import { string, number } from 'prop-types'
import Button from '../ui/Button'

function BookItem({ title, description, price }) {
  return (
    <li>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>${price.toFixed(2)}</p>
        <Button buttonType="success" value="Add to cart" />
        <Button buttonType="primary" value="Add to cart" />
        <Button buttonType="danger" value="Add to cart" />
      </div>
    </li>
  )
}

BookItem.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  price: number.isRequired
}

export default BookItem
