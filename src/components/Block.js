import React, { useCallback } from 'react'
const Block = ({idx, clickHandler, route}) => {
  const navigate = () => {
    window.location.assign(route)
  };
  const handleNavigation = useCallback(() => navigate(), [navigate])

  return (
    <div data-grow={0} data-value={idx} onClick={(e) => {
      clickHandler(e)
      setTimeout(() => {
        handleNavigation()
      }, 750)
    }} className="shape"></div>
  )
}

export default Block