import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const GetCategory = () => {
  const categoriesData = useSelector(state => state.categories)
  const [categories, setcategories] = useState()

  useEffect(() => {
    if (categoriesData.loading === false && categoriesData.data) {
      const navItems = categoriesData.data.map(category => {
        return {
          name: category.name,
          img: category.imageLink,
          id: category.id,
        }
      })
      setcategories(navItems)
    }
  }, [categoriesData])

  return { categories }
}

export default GetCategory
