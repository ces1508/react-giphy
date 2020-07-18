import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory ({ setCategories }) {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    const { value } = e.target
    setInputValue(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!inputValue) return;

    setCategories(cats => [inputValue, ...cats])
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder="Naruto, One Punch Man, Lol"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory
