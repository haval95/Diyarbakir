import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'

import { openDetalModal, uploadData } from '../../redux'

const Button = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart)
  const user = useSelector(state => state.user)

  const sendOrder = option => {
    const data = { ...cartItems, option }

    dispatch(uploadData(user.config, data))
  }

  if (cartItems.tableNumber) {
    return (
      <div className="grid gap-1 mb-3">
        <button
          type="button"
          className="bg-black light px-1-5 py-05 rounded-lg shadow-btn cruser-pointer"
          onClick={() =>
            cartItems.lines.length
              ? sendOrder('dinning')
              : swal({
                  title: 'Oh!',
                  text: 'Please Add Items to Your Cart, then try agian!',
                  icon: 'info',
                })
          }
        >
          Dinning
        </button>
        <button
          type="button"
          className="bg-red light px-1-5 py-05 rounded-lg shadow-btn cruser-pointer"
          onClick={() =>
            cartItems.lines.length
              ? sendOrder('take away')
              : swal({
                  title: 'Oh!',
                  text: 'Please Add Items to Your Cart, then try agian!',
                  icon: 'info',
                })
          }
        >
          Take Away
        </button>
      </div>
    )
  }

  return (
    <button
      type="button"
      className="bg-red light px-1-5 py-05 rounded-lg shadow-btn cruser-pointer  mb-3"
      onClick={() =>
        cartItems.lines.length
          ? dispatch(openDetalModal())
          : swal({
              title: 'Oh!',
              text: 'Please Add Items to Your Cart, then try agian!',
              icon: 'info',
            })
      }
    >
      MAKE ORDER
    </button>
  )
}

export default Button
