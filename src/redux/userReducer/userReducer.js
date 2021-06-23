import { LOGIN, LOGOUT, REQUEST, REQEUST_FAILED } from './ActionTypes'

const localData = JSON.parse(localStorage.getItem('userData'))

const localStorageData = localData
  ? {
      isLoading: false,
      isAuthenticated: true,
      user: {
        id: localData.id,
        email: localData.email,
        username: localData.username,
        role: localData.role,
        config: {
          headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localData.token}`,
          },
        },
      },
    }
  : {
      isLoading: false,
      isAuthenticated: false,
      user: {
        id: '',
        email: '',
        username: '',
        role: '',
        config: {
          headers: {
            'content-type': 'application/json',
            authorization: '',
          },
        },
      },
    }

const initialState = {
  isLoading: localStorageData.isLoading,
  isAuthenticated: localStorageData.isAuthenticated,
  user: localStorageData.user,
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN:
      return {
        isAuthenticated: true,
        isLoading: false,
        user: {
          id: action.payload.id,
          email: action.payload.email,
          username: action.payload.username,
          role: action.payload.role,
          config: {
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${action.payload.token}`,
            },
          },
        },
      }

    case LOGOUT:
      return {
        isAuthenticated: false,
        user: {
          id: '',
          email: '',
          username: '',
          role: '',
          config: {
            headers: {
              'content-type': 'application/json',
              authorization: '',
            },
          },
        },
      }
    case REQEUST_FAILED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default UserReducer
