import axios from 'axios'
import { loading, stopLoaing } from '../IsLoading/LoadingAction'
import { LOGIN, LOGOUT, REQUEST, REQEUST_FAILED } from './ActionTypes'

export const login = data => {
  return {
    type: LOGIN,
    payload: data,
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export const request = () => {
  return {
    type: REQUEST,
  }
}

export const failed = error => {
  return {
    type: REQEUST_FAILED,
    payload: error,
  }
}

export const loginUser = data => {
  return dispatch => {
    dispatch(request())
    dispatch(loading())
    axios
      .post(`https://woodloungerest.com/users/authenticate`, data, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(response => {
        dispatch(login(response.data))
        localStorage.setItem('userData', JSON.stringify(response.data))
        dispatch(stopLoaing())
      })
      .catch(error => {
        dispatch(failed(error))
        dispatch(stopLoaing())
      })
  }
}

export const logOutUser = () => {
  return dispatch => {
    dispatch(loading())

    localStorage.removeItem('userData')
    dispatch(logout())
    dispatch(stopLoaing())
  }
}
