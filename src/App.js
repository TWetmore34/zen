import React from 'react'
import { Link } from "react-dom"
const App = () => {
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    setInterval(() => {
        const wrapper = document.getElementById("wrapper");
        wrapper.setAttribute("data-roundness", random(1,4))
        wrapper.setAttribute("data-config", random(1,2))
    }, 3000)
  return (
    <div data-roundness="1" data-config="3" id="wrapper">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
  )
}

export default App