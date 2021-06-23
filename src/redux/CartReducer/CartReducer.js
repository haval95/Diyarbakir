import {
  ADD_TO_CART,
  CART_RESET,
  REMOVE_FROM_CART,
  UPDATE_ORDER_DETAIL,
  REMOVE_FROM_CART_COMPLETELY,
} from './ActionTypes'

const initialState = {
  totalPrice: 0,
  lines: [],
  numberOfItems: 0,
  customer: '',
  address: '',
  phoneNumber: '',
  discount: 0,
  haveDiscount: false,
  state: 'Pending',
  createdBy: '',
  cashier: '',
  tableNumber: 0,
  paymentCreated: false,
  location: '',
  option: '',
  state: 'pending',
}

const CartReducer = (state = initialState, action) => {
  const newItem = action.payload
  switch (action.type) {
    case ADD_TO_CART:
      if (state.lines.find(item => item.itemId === newItem.itemId)) {
        return {
          ...state,
          totalPrice: state.totalPrice + newItem.item.price,
          numberOfItems: state.numberOfItems + 1,
          lines: state.lines.map(line =>
            line.itemId === newItem.itemId
              ? {
                  ...line,
                  quantity: line.quantity + 1,
                  totalPrice: line.totalPrice + newItem.item.price,
                  item: {
                    ...newItem.item,
                  },
                }
              : line
          ),
        }
      }

      return {
        ...state,
        totalPrice: state.totalPrice + newItem.item.price,
        numberOfItems: state.numberOfItems + 1,
        lines: [
          ...state.lines,

          {
            itemId: newItem.itemId,
            quantity: 1,
            totalPrice: newItem.item.price,
            item: {
              ...newItem.item,
            },
          },
        ],
      }

    case REMOVE_FROM_CART:
      if (newItem.item.qty === 1) {
        return {
          ...state,
          totalPrice: state.totalPrice - newItem.item.price,
          numberOfItems: state.numberOfItems - 1,
          lines: state.lines.filter(item => item.itemId !== newItem.itemId),
        }
      }
      return {
        ...state,
        totalPrice: state.totalPrice - newItem.item.price,
        numberOfItems: state.numberOfItems - 1,
        lines: state.lines.map(line =>
          line.itemId === newItem.itemId
            ? {
                ...line,
                quantity: line.quantity - 1,
                totalPrice: line.totalPrice - newItem.item.price,
                item: {
                  ...newItem.item,
                },
              }
            : line
        ),
      }
    case UPDATE_ORDER_DETAIL:
      return {
        ...state,
        ...newItem,
      }

    case REMOVE_FROM_CART_COMPLETELY:
      return {
        ...state,
        totalPrice: state.totalPrice - newItem.item.price * newItem.item.qty,
        numberOfItems: state.numberOfItems - newItem.item.qty,
        lines: state.lines.filter(item => item.itemId !== newItem.itemId),
      }

    case CART_RESET:
      return {
        ...state,
        tableNumber: action.isOrder ? null : state.tableNumber,
        location: action.isOrder ? null : state.location,
        totalPrice: 0,
        lines: [],
        numberOfItems: 0,
        customer: '',
        address: '',
        phoneNumber: '',
        discount: 0,
        haveDiscount: false,
        createdBy: '',
        cashier: '',
        paymentCreated: false,
        option: action.isOrder ? null : state.option,
        state: 'pending',
      }

    default:
      return state
  }
}

export default CartReducer
