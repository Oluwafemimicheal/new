import React from 'react'

const IconWrapper = ({icon, position}) => {
  return (
    <div className= {`absolute ${position}`}>
      {icon}
    </div>
  )
}

export default IconWrapper
