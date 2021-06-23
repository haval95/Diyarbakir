import { useState } from 'react'

const HandleSlide = () => {
  const [state, setState] = useState()
  const [toggleState, settoggleState] = useState(false)

  const handleBurgger = () => {
    settoggleState(!toggleState)
  }
  const handleTouchStart = e => {
    setState(e.touches[0].clientX)
    settoggleState(true)
  }

  const handleTouchEnd = e => {
    const last = e.touches[0].clientX
    const location = {
      x: last,
    }
    const differences = {
      x: state - location.x,
    }

    if (differences.x < -30) {
      settoggleState(false)
    }
  }

  return { handleTouchStart, handleTouchEnd, handleBurgger, toggleState }
}

export default HandleSlide
