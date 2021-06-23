import React from 'react'
import { PropTypes } from 'prop-types'

import { Link } from 'react-router-dom'
import img1 from '../../assets/notFound.png'
const CategoryCard = ({ img, name, CategoryId, subCategoryId }) => {
  return (
    <Link
      to={`/menu?category=${CategoryId}&SubCategory=${subCategoryId || ''}`}
      className="light link"
    >
      <div className="bg-greyShade grid rounded-lg shadow-light item-card  text-start relative w-200 h-full">
        <div className="  h-200   relative">
          <img
            src={img ? img : img1}
            alt=""
            className="h-90 w-full rounded-top-lg object-cover"
          />
        </div>

        <div className="px-07 p-1 text-capitalize text-center">{name}</div>
      </div>
    </Link>
  )
}

CategoryCard.propTypes = {
  subCategoryId: PropTypes.number,
  CategoryId: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
}

CategoryCard.defaultProps = {
  subCategoryId: null,
  CategoryId: null,
  name: 'not given',
  img: null,
}

export default CategoryCard
