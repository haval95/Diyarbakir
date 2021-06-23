import { IS_LOADING, STOP_LOADING } from './ActionTypes'

const initialState = {
  isLoading: false,
}

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        isLoading: true,
      }

    case STOP_LOADING:
      return {
        isLoading: false,
      }
    default:
      return state
  }
}

export default LoadingReducer
