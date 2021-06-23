import React from 'react'
import { PropTypes } from 'prop-types'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import img1 from '../../assets/notFound.png'
import { addToCard } from '../../redux'

const ItemCard = ({
  subCategoryId,
  categoryId,
  categoryName,
  img,
  price,
  ingridiant,
  name,
  id,
  menuText,
}) => {
  const dispatch = useDispatch()

  const addItem = () => {
    toast.success(`${name} added!`)
    dispatch(
      addToCard({
        itemId: Number(id),
        item: {
          id: Number(id),
          name,
          imageLink: img,
          ingredients: ingridiant,
          price,
          subCategory: {
            id: Number(subCategoryId),
            categoryId,
            name: categoryName,
          },
        },
      })
    )
  }
  return (
    <div className="bg-greyShade grid rounded-lg shadow-light item-card  text-start relative w-200 h-full">
      <div className="  h-200   relative">
        <img
          src={img ? `https://woodloungerest.com/${img}` : img1}
          alt=""
          className="h-90 w-full rounded-top-lg object-cover"
        />
        <div className="absolute  flex left-15 bottom ">
          <h6 className=" min-w-40 text-center center  p-05 pr-07 rounded bg-brown">
            {new Intl.NumberFormat('IQD', {
              style: 'currency',
              currency: 'IQD',
            }).format(price)}{' '}
          </h6>

          <button
            type="button"
            className=" ml--10  shadow-btn  rounded-full w-25 h-25  bg-red light cruser-pointer "
            onClick={addItem}
          >
            +
          </button>
        </div>
      </div>

      <div className="px-07 pt-1 text-capitalize ">{name}</div>

      <div className="px-07 py-07 light  text-small text-justify firstLetterCapital  text-lower text-wrap">
        {menuText}
      </div>
    </div>
  )
}

ItemCard.propTypes = {
  menuText: PropTypes.string,
  categoryName: PropTypes.string,
  subCategoryId: PropTypes.string,
  categoryId: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  ingridiant: PropTypes.array,
}

ItemCard.defaultProps = {
  menuText: '',
  categoryName: '',
  subCategoryId: 0,
  categoryId: 0,
  id: 0,
  name: 'not given',
  img: null,
  price: 0,
  ingridiant: [],
}

export default ItemCard
