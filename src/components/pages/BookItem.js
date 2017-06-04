import React from 'react'
import { shape, string, number } from 'prop-types'
import Button from '../ui/Button'

function BookItem({ book: { title, description, price } }) {
  return (
    <li className="list-item">
      <div className="card">
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
  book: shape({
    title: string,
    description: string,
    price: number
  }).isRequired
}

export default BookItem
