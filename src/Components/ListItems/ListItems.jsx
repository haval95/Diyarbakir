import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { v4 as uuid } from 'uuid'
import { useLocation } from 'react-router-dom'
import ItemCard from '../ItemCard'
import Filter from '../../Helpers/Filter'
import CategoryCard from '../CategoryCard'

const ListItems = () => {
  const categories = useSelector(state => state.categories)
  const location = useLocation()

  const [CategorySearchWord, setCategorySearchWord] = useState()
  const [SubCategorySearchWord, setSubCategorySearchWord] = useState()

  useEffect(() => {
    const searchCategory = new URLSearchParams(location.search).get('category')
    const searchSubCategory = new URLSearchParams(location.search).get(
      'SubCategory'
    )
    setCategorySearchWord(searchCategory)
    setSubCategorySearchWord(searchSubCategory)
  }, [location])

  const getFoodItemCards = data => {
    const listedFoodItems = data.map(category => {
      return category.items.map(eachFood => {
        return (
          <ItemCard
            key={uuid()}
            price={eachFood.price}
            ingridiant={eachFood.ingridiant}
            name={eachFood.name}
            img={eachFood.imageLink}
            id={eachFood.id}
            menuText={eachFood.menuText}
            subCategoryId={SubCategorySearchWord}
            categoryId={CategorySearchWord}
            categoryName={category.name}
          />
        )
      })
    })
    return listedFoodItems
  }

  const getSubsOrCategoriesCards = (data, category) => {
    return (
      <CategoryCard
        key={uuid()}
        img={category.imageLink}
        name={category.name}
        CategoryId={data ? data.id : category.id}
        subCategoryId={data ? category.id : null}
      />
    )
  }

  const getItems = () => {
    const FilteredCategoriesBySearchWords = Filter(
      categories.data,
      SubCategorySearchWord,
      CategorySearchWord
    )
    if (SubCategorySearchWord && CategorySearchWord) {
      const items = getFoodItemCards(FilteredCategoriesBySearchWords)
      return { items: items, name: FilteredCategoriesBySearchWords[0].name }
    }
    if (FilteredCategoriesBySearchWords && CategorySearchWord) {
      const listItems = FilteredCategoriesBySearchWords[0].subCategories.map(
        subCategory => {
          return getSubsOrCategoriesCards(
            FilteredCategoriesBySearchWords[0],
            subCategory
          )
        }
      )
      return { items: listItems, name: FilteredCategoriesBySearchWords[0].name }
    }
    if (FilteredCategoriesBySearchWords) {
      const listItems = FilteredCategoriesBySearchWords.map(category => {
        return getSubsOrCategoriesCards(null, category)
      })
      return { items: listItems, name: 'Categories' }
    }

    return null
  }

  if (categories.loading === false && categories.data.length) {
    return (
      <div className="mt-2 text-start t-red">
        <h2 className="  px-07 pr-2 text-capitalize    inline rounded-right-xl py-05  ">
          {getItems().name}
        </h2>
        <div className="grid sm-justify-center justify-content-center  min-cols-w-300 gap-1-5 p-1-5  align-center text-center">
          {getItems().items}
        </div>
      </div>
    )
  }

  return <div className=" p-1-5 m-1">Looking For Items...</div>
}

export default ListItems
