import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux'

const Login = () => {
  const [userData, setUserData] = useState({})
  const dispatch = useDispatch()
  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }
  useEffect(() => {
    dispatch(loginUser({ username: 'admin', password: '123' }))
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(loginUser({ username: 'admin', password: '123' }))
  }
  return (
    <div className="grid justify-center justify-content-center text-center w-100 h-100  align-center ">
      <form
        onSubmit={handleSubmit}
        className="grid gap-1 border-1 border border-light shadow  bg-greyShade p-3 rounded-lg login"
      >
        <h3 className="light mb-1 text-xl">Login</h3>
        <input
          type="text"
          placeholder="User Name"
          name="username"
          className="rounded-lg px-07 p-05 text-center"
          onChange={handleChange}
        />
        <input
          className="rounded-lg px-07 p-05 mb-1 text-center"
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="rounded-lg px-07 bg-red light shadow-btn p-05 justify-self-end "
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
