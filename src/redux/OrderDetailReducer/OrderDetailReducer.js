import { OPEN_DETAIL_MODAL, CLOSE_DETAIL_MODAL } from './ActionTypes'

const initialState = {
  isOpen: false,
}

const OrderDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DETAIL_MODAL:
      return {
        isOpen: true,
      }

    case CLOSE_DETAIL_MODAL:
      return {
        isOpen: false,
      }
    default:
      return state
  }
}

export default OrderDetailReducer
