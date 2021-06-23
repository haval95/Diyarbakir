import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrder, uploadData } from '../../redux'

const OrderDetailFunctions = () => {
  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()
  const [formState, setFormState] = useState({
    customer: '',
    address: '',
    phoneNumber: '',
    discount: 0,
    haveDiscount: false,
    cashier: '',
    paymentCreated: false,
    option: 'Delivery',
  })
  const handleChange = e => {
    if (e.target.name === 'checkbox') {
      if (e.target.id === 'haveDiscount' && e.target.checked === false) {
        setFormState({
          ...formState,
          [e.target.id]: e.target.checked,
          discount: 0,
        })
      } else {
        setFormState({
          ...formState,
          [e.target.id]: e.target.checked,
        })
      }
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      })
    }
  }

  const sendOrder = e => {
    e.preventDefault()
    dispatch(updateOrder(formState))

    dispatch(uploadData(user.config, { ...cart, ...formState }))
    setFormState({
      customer: '',
      address: '',
      phoneNumber: '',
      discount: 0,
      haveDiscount: false,
      cashier: '',
      paymentCreated: false,
    })
  }

  return { formState, handleChange, sendOrder }
}

export default OrderDetailFunctions
