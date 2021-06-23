import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import HandleSlide from './Slider'
import OrderList from '../OrderList'
import { logOutUser } from '../../redux'
import GetCategory from './GetCategory'

const Navbar = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const [collapsedNav, setCollapsedNav] = useState(false)
  const { categories } = GetCategory()
  const {
    handleTouchEnd,
    handleTouchStart,
    handleBurgger,
    toggleState,
  } = HandleSlide()

  return (
    <div className="">
      <nav className="mb-60">
        <div className=" grid justify-center nav collapsed p-1">
          <div
            onClick={() => setCollapsedNav(true)}
            className="burger justify-self-start "
            onKeyDown={() => setCollapsedNav(true)}
            role="button"
            tabIndex={0}
          >
            <div className="line line1" />
            <div className="line line2" />
            <div className="line line3" />
          </div>

          <div className="meue"> Menu</div>
          <button
            type="button"
            className="justify-self-end border rounded cruser-pointer align-center align-self-start bg-transparent light p-05"
            onClick={handleBurgger}
          >
            <FontAwesomeIcon icon="shopping-basket" />
            <span className="ml-5">{cart.numberOfItems}</span>
          </button>
        </div>

        <div
          className={`${
            collapsedNav ? 'open' : 'none'
          } nav-links grid  align-content-center justify-center align-center  gap-3`}
        >
          <button
            type="button"
            className="closebtn p-1 bg-transparent light ml-1 text-xl cruser-pointer"
            onClick={() => setCollapsedNav(false)}
          >
            &times;
          </button>
          <Link to="/" onClick={() => setCollapsedNav(false)}>
            HOME
          </Link>
          <Link to="/menu" onClick={() => setCollapsedNav(false)}>
            MENU
          </Link>
          <Link to="/about" onClick={() => setCollapsedNav(false)}>
            ABOUT
          </Link>
          <Link
            to="/"
            onClick={() => {
              setCollapsedNav(false)
              dispatch(logOutUser())
            }}
          >
            LOG OUT
          </Link>
        </div>
        {categories ? (
          <div className="menu-list grid overflow v-space-around">
            <button
              type="button"
              className="bg-transparent cruser-pointer px-07 w-full light  pt-1  "
              onClick={() => setCollapsedNav(true)}
            >
              <FontAwesomeIcon icon="ellipsis-h" size="2x" className="light" />
            </button>
            <NavLink to="/">
              <img
                alt=""
                src="https://cdn.iconscout.com/icon/free/png-256/home-803-450320.png  "
                className="px-07 w-full light  pt-1 "
              />
            </NavLink>
            {categories.map(category => {
              return (
                <NavLink to={`/menu?category=${category.id}`} key={uuid()}>
                  <img
                    alt=""
                    src={category.img}
                    className="px-07 w-full light  pt-1 "
                  />
                </NavLink>
              )
            })}
          </div>
        ) : null}
      </nav>
      <div
        className={`${
          toggleState ? 'OrderOpened  ' : 'none'
        } xl-open   sm-closed bg-brown h100 sm-pt-60 pt-1 grid aling-center align-content-start overflow  `}
        onTouchStart={e => handleTouchStart(e)}
        onTouchMove={e => handleTouchEnd(e)}
      >
        <OrderList />
      </div>
    </div>
  )
}

export default Navbar
