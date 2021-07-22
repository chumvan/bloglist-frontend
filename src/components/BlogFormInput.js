import React from 'react'
import PropTypes from 'prop-types'

const BlogFormInput = ({ title, value, handleInputChange }) => {
  return (
    <div>
      <div>
        {title}
        <input value={value} type='text' onChange={handleInputChange} />
      </div>
    </div>
  )
}

BlogFormInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
}

export default BlogFormInput
