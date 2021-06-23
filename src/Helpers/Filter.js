function Filter(items = [], searchSubCategory, searchCategory) {
  if (searchSubCategory && searchCategory) {
    const singleCategory = items.filter(
      category => category.id === Number(searchCategory)
    )

    const singleSubCategory = singleCategory[0].subCategories.filter(
      sub => sub.id === Number(searchSubCategory)
    )

    return singleSubCategory
  }
  if (searchCategory) {
    return items.filter(category => category.id === Number(searchCategory))
  }

  return items
}

export default Filter
