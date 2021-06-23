import axios from 'axios'
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SECCESS,
  FETCH_CATEGORIES_FAILURE,
} from './ActionTypes'
import { loading, stopLoaing } from '../IsLoading/LoadingAction'

export const FetchCategoriesRequest = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  }
}

export const FetchCategoriesSeccess = data => {
  return {
    type: FETCH_CATEGORIES_SECCESS,
    payload: data,
  }
}

export const FetchCategoriesFailure = error => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
  }
}

export const FetchCategories = config => {
  return dispatch => {
    dispatch(FetchCategoriesRequest())
    dispatch(loading())
    axios
      .get(`https://woodloungerest.com/categories/getall`, {
        config,
      })
      .then(response => {
        dispatch(FetchCategoriesSeccess(response.data))
        dispatch(stopLoaing())
      })
      .catch(error => {
        dispatch(FetchCategoriesFailure(error))
        dispatch(stopLoaing())
      })
  }
}
