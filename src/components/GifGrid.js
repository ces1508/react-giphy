import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
// import getGifs from '../helpers/getGifs'


const GifGrid = ({ category }) => {

  const { data: gifs, error, loading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {  loading &&  <p>Cargando ...</p> }
      { error && <p>ocurrio un error cargando los gifs</p>}
      <div className="card-grid">
        {gifs.map( image => (
          <GifGridItem
            key={image.id}
            {...image}
          />
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid