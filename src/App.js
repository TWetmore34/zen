import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProjectPage from './pages/ProjectPage'
import Block from './components/Block'
const App = () => {
    const [bgColor, setBgColor] = useState("black")
    useEffect(() => {
        setTimeout(() => {
            let background = document.querySelector("body");
            background.style.backgroundColor = bgColor;
        }, 700)
      },[bgColor])

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

    
    
    const renderBoxes = () => {
        let routes = ["test1", "test2", "test3", "test4", "test5", "test6", "test7"]
        let boxes = []
        for(let i = 0; i < 7; i++) {
            boxes.push(
            <Block key={i} route={routes[i]} idx={i} clickHandler={clickHandler}/>
            )
        }
        return (boxes)
    }

    const clickHandler = async (e) => {
        e.preventDefault()
        clearInterval(animation)
        e.target.setAttribute("data-grow", 1)
        let color = window.getComputedStyle(e.target, null).getPropertyValue('background-color')

        setBgColor(color)

        // calls animation for routing
        let wrapper = document.getElementById("wrapper");
        wrapper.setAttribute("data-config", 4)

        // set body background color to match selected option
        setBgColor(color)
    }
  return ( 
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
            <div data-roundness={1} data-config="3" id="wrapper">
                {renderBoxes()}
            </div>
            } />
            <Route path="/test1" element={
                <ProjectPage route={"/test1"} />
            } />
            <Route path="/test2" element={
                <ProjectPage route={"/test2"} />
            } />
            <Route path="/test3" element={
                <ProjectPage route={"/test3"} />
            } />
            <Route path="/test4" element={
                <ProjectPage route={"/test4"} />
            } />
            <Route path="/test5" element={
                <ProjectPage route={"/test5"} />
            } />
            <Route path="/test6" element={
                <ProjectPage route={"/test6"} />
            } />
            <Route path="/test7" element={
                <ProjectPage route={"/test7"} />
            } />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App