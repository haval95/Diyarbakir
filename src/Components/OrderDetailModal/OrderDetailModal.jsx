import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDetailModal } from '../../redux'
import OrderDetailFunctions from './OrderDetailFunctions'
import './orderModal.css'

const OrderDetailModal = () => {
  const orderModal = useSelector(state => state.orderModal)
  const dispatch = useDispatch()
  const { formState, handleChange, sendOrder } = OrderDetailFunctions()

  return (
    <div
      className={`${
        orderModal.isOpen ? 'd-block' : 'd-none'
      }  bg-opacity w-100 h-100   `}
    >
      <div
        className={`${orderModal.isOpen ? 'd-block' : 'd-none'} modal bg-light`}
      >
        <div className="header">
          <h6 className="title">Order Detail</h6>
          <button
            onClick={() => dispatch(closeDetailModal())}
            type="button"
            className="close"
          >
            X
          </button>
        </div>
        <div className="body">
          <form onSubmit={sendOrder}>
            <input
              required
              type="text"
              placeholder="Full Name"
              name="customer"
              value={formState.customer}
              onChange={handleChange}
            />
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="Address"
              name="address"
              value={formState.address}
            />
            <input
              required
              onChange={handleChange}
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formState.phoneNumber}
            />

            <input
              className={`${
                formState.haveDiscount ? 'showInput' : 'hideInput'
              } `}
              type="number"
              name="discount"
              min="0"
              max="99"
              placeholder="Discount"
              value={formState.haveDiscount === true ? formState.discount : 0}
              onChange={handleChange}
            />

            <div className="footer  flex">
              <button
                type="button"
                className="cancel btn"
                onClick={() => dispatch(closeDetailModal())}
              >
                Cancel
              </button>
              <button type="submit" className="send btn ">
                Send Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OrderDetailModal
