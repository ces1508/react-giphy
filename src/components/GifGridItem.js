import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({ url, title }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={url}
          alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
}

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}


export default GifGridItem