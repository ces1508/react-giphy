import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid  from './components/GifGrid'

export default function GifExpertApp() {

  const [categories, setcategories] = useState(['One Punch'])

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setcategories} />
      <hr />
      <>
        {categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))}
      </>
    </>
  )
}
