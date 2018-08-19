import React from 'react'
import PropTypes from 'prop-types'

const userOutput = (props) => {
  return (
    <div>
      <p>
        {props.username}
      </p>
    </div>
  )
}

userOutput.propTypes = {
  username: PropTypes.string
}
export default userOutput
