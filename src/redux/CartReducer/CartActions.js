import axios from 'axios'
import swal from 'sweetalert'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_RESET,
  UPDATE_ORDER_DETAIL,
} from './ActionTypes'
import { closeDetailModal } from '../OrderDetailReducer/OrderDetailActions'
import { loading, stopLoaing } from '../IsLoading/LoadingAction'

export const addToCard = item => {
  return {
    type: ADD_TO_CART,
    payload: item,
  }
}

export const updateOrderDetail = orderDetail => {
  return {
    type: UPDATE_ORDER_DETAIL,
    payload: orderDetail,
  }
}

export const removeFromCart = item => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  }
}

export const restCart = isOrder => {
  return {
    type: CART_RESET,
    isOrder,
  }
}

export const updateOrder = orderDetail => {
  return dispatch => {
    dispatch(updateOrderDetail(orderDetail))
    dispatch(closeDetailModal())
  }
}

export const uploadData = (userConfig, order, isOrder = false) => {
  return dispatch => {
    dispatch(loading())
    axios
      .post(`https://woodloungerest.com/orders`, order, userConfig)
      .then(() => {
        dispatch(restCart(isOrder))
        swal({
          title: 'Sent!',
          text: 'Order Successfully Sent!',
          icon: 'success',
        })
        dispatch(stopLoaing())
      })
      .catch(() => {
        swal({
          title: 'Error',
          text: 'Sorry, an error occured, try agian!',
          icon: 'error',
        })

        dispatch(stopLoaing())
      })
  }
}
