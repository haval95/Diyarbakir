import { IS_LOADING, STOP_LOADING } from './ActionTypes'

export const loading = () => {
  return {
    type: IS_LOADING,
  }
}

export const stopLoaing = () => {
  return {
    type: STOP_LOADING,
  }
}
