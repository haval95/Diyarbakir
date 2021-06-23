import React from 'react'
import { PropTypes } from 'prop-types'
import { useDispatch } from 'react-redux'

import img1 from '../../assets/notFound.png'
import { addToCard, removeFromCart } from '../../redux'

const CartItemCard = ({ img, name, price, qty, id, ingredients }) => {
  const dispatch = useDispatch()

  const addItem = () => {
    dispatch(
      addToCard({
        itemId: Number(id),
        item: {
          id: Number(id),
          name,
          imageLink: img,
          ingredients,
          price,
          qty,
        },
      })
    )
  }

  const decreaseInCart = () => {
    dispatch(
      removeFromCart({
        itemId: Number(id),
        item: {
          id: Number(id),
          name,
          imageLink: img,
          ingredients,
          price,
          qty,
        },
      })
    )
  }
  return (
    <div
      className=" grid cols-5 justify-content-center align-self-start  px-1-5 black  "
      key={id}
    >
      <div className="col-span-2  h90 over">
        <img
          src={img ? `https://woodloungerest.com/${img}` : img1}
          className="h90 w-full rounded object-cover "
          alt=""
        />
      </div>
      <div className="col-span-3  grid   rounded bg-white px-07 py-07 gap-1 ml-1">
        <div className="grid cols-2">
          <p> {name}</p>
          <h3> {price}</h3>
        </div>

        <div className="grid cols-3 align-center justify-center">
          <button
            onClick={decreaseInCart}
            type="button"
            className="rounded-full bg-red light justify-self-end w-25 h-25 cruser-pointer"
          >
            -
          </button>
          <h3>{qty}</h3>
          <button
            onClick={addItem}
            type="button"
            className="rounded-full bg-red light justify-self-start w-25 h-25 cruser-pointer"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
CartItemCard.propTypes = {
  ingredients: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  qty: PropTypes.number,
}

CartItemCard.defaultProps = {
  ingredients: [],
  qty: 1,
  id: 0,
  name: 'not given',
  img: null,
  price: 0,
}
export default CartItemCard
