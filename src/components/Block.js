import React, { useCallback } from 'react'
import { useNavigate } from "react-router-dom"
const Block = ({idx, clickHandler}) => {
  const navigate = useNavigate();
  const handleNavigation = useCallback(() => navigate("/test", {replace: true}), [navigate])

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