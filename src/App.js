import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TestPage from './pages/TestPage'
import Block from './components/Block'
const App = () => {
    const [animate, setAnimate] = useState(true)
    const [bgColor, setBgColor] = useState("black")
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    let animation = setInterval(() => {
            const wrapper = document.getElementById("wrapper");
            if(wrapper) {
            wrapper.setAttribute("data-roundness", random(1,4))
            wrapper.setAttribute("data-config", random(1,2))
                }
        }, 3000)

    if(!animate) {
        clearInterval(animation)
    }
    
    
    const renderBoxes = () => {
        let boxes = []
        for(let i = 0; i < 6; i++) {
            boxes.push(<Block key={i} idx={i} clickHandler={clickHandler}/>)
        }
        return (boxes)
    }

    const clickHandler = async (e) => {
        e.preventDefault()
        setAnimate(false)
        e.target.setAttribute("data-grow", 1)
        let color = window.getComputedStyle(e.target, null).getPropertyValue('background-color')
        let top = window.getComputedStyle(e.target, null).getPropertyValue('top');
        let left = window.getComputedStyle(e.target, null).getPropertyValue('left');

        let wrapper = document.getElementById("wrapper");
        
        wrapper.setAttribute("data-config", 4)

        setBgColor(color)
    }
  return ( 
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
            <div data-roundness="1" data-config="3" id="wrapper">
                {renderBoxes()}
            </div>
            } />
            <Route path="/test" element={
                <TestPage color={bgColor} />
            } />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App