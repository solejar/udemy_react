import React from 'react'
import PropTypes from 'prop-types'

const userInput = (props) => {
  return (
    <div>
      <input type='text' onChange={props.changed} value={props.username} />

    </div>
  )
}

userInput.propTypes = {
  changed: PropTypes.func,
  username: PropTypes.string
}
export default userInput
