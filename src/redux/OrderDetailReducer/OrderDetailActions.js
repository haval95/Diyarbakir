import { OPEN_DETAIL_MODAL, CLOSE_DETAIL_MODAL } from './ActionTypes'

export const openDetalModal = () => {
  return {
    type: OPEN_DETAIL_MODAL,
  }
}

export const closeDetailModal = () => {
  return {
    type: CLOSE_DETAIL_MODAL,
  }
}
