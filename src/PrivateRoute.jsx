import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children, ...rest }) {
  const user = useSelector(state => state.user)

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        user && user.isAuthenticated ? (
          children
        ) : (
          <>
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location, mode: 'restricted' },
              }}
            />
          </>
        )
      }
    />
  )
}
