import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'

import CartItemCard from '../CartItemCard/index'

import Button from './Button'

const OrderList = () => {
  const cartItems = useSelector(state => state.cart)

  return (
    <>
      <h2 className="p-1 "> Invoice</h2>
      {cartItems.tableNumber !== 0 ? (
        <h6 className="mb-1 p-05 bg-red ">
          Table: {cartItems.tableNumber} | {cartItems.location}
        </h6>
      ) : (
        <h6 className="mb-1 p-05 bg-red">YOUR ORDER</h6>
      )}
      <div className="grid gap-1   ">
        {cartItems.lines
          ? cartItems.lines.map(line => (
              <CartItemCard
                key={uuid()}
                img={line.item.imageLink}
                name={line.item.name}
                price={line.item.price}
                qty={line.quantity}
                id={line.itemId}
                ingredients={line.item.ingridiant}
              />
            ))
          : null}

        <div className="p-1 grid justify-center ">
          <p className="p-05 mb-1 border border-light">
            Total:{' '}
            {new Intl.NumberFormat('IQD', {
              style: 'currency',
              currency: 'IQD',
            }).format(cartItems.totalPrice)}
          </p>
          {cartItems ? (
            <Button
              tableNumber={cartItems.tableNumber}
              length={cartItems.length}
            />
          ) : (
            'laoding'
          )}
        </div>
      </div>
    </>
  )
}

export default OrderList
