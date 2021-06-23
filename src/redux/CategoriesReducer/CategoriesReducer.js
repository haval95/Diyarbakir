import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SECCESS,
  FETCH_CATEGORIES_FAILURE,
} from './ActionTypes'

const initialState = {
  loading: false,
  data: [],
  error: '',
}

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_CATEGORIES_SECCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default CategoriesReducer
