import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, useLocation } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Toaster } from 'react-hot-toast'
import Navbar from './Components/Navbar'
import Home from './Containers/Home'
import Menu from './Containers/Menu'
import About from './Containers/About'
import './App.css'
import './fontawsome'

import { FetchCategories, stopLoaing, loading, updateOrder } from './redux'
import { ABOUT_ROUTE, HOME_ROUTE, CATEG0RY_ROUTE } from './router'
import Login from './Containers/Login'
import PrivateRoute from './PrivateRoute'
import OrderDetailModal from './Components/OrderDetailModal/OrderDetailModal'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const loadingState = useSelector(state => state.loading)
  const location = useLocation()

  useEffect(() => {
    const table = new URLSearchParams(location.search).get('table')
    const tableLocation = new URLSearchParams(location.search).get('location')
    if (location && table !== null && table !== undefined) {
      dispatch(updateOrder({ tableNumber: table, location: tableLocation }))
    }
  }, [location])

  useEffect(() => {
    if (user.isAuthenticated) {
      dispatch(FetchCategories(user.config))
    }
  }, [user])

  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <OrderDetailModal />

      <SweetAlert
        title=""
        onConfirm={() => dispatch(stopLoaing)}
        show={loading && loadingState.isLoading}
        showConfirm={false}
        closeOnClickOutside
        onCancel={() => dispatch(stopLoaing())}
        style={{ backgroundColor: '#FFFFFF', borderRadius: '20px' }}
      >
        <div className="light p-3 grid justify-center gap-2">
          <FontAwesomeIcon
            icon="spinner"
            className="t-red mb-5"
            pulse
            size="7x"
          />
          <h1 className="t-red m-3 mt-4 text-3xl">Loading ...</h1>
        </div>
      </SweetAlert>

      <Switch>
        {user && user.isAuthenticated ? (
          <div className="container light text-center ">
            <div className="p-1">
              <PrivateRoute exact path={HOME_ROUTE}>
                <Home />
              </PrivateRoute>
              <PrivateRoute exact path={ABOUT_ROUTE}>
                <About />
              </PrivateRoute>
              <PrivateRoute exact path={CATEG0RY_ROUTE}>
                <Menu />
              </PrivateRoute>
            </div>
            <Navbar />
          </div>
        ) : (
          <Route path={HOME_ROUTE} component={Login} />
        )}
      </Switch>
    </div>
  )
}

export default App
