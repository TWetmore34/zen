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
    let idx = 0
    let opacity = 0;
    let txtAnimate = setInterval(() => {
        const text= document.querySelectorAll("h1");
        text[idx].setAttribute("data-opacity", opacity)
        opacity = idx === text.length - 1 ? opacity + 1 : opacity
        idx = idx < (text.length - 1) ? (idx + 1) : 0;
    }, 85)

    let animation = setInterval(() => {
            const wrapper = document.getElementById("wrapper");
            if(wrapper) {
            wrapper.setAttribute("data-roundness", random(1,4))
            wrapper.setAttribute("data-config", random(1,2))
                }
        }, 3000)

    const renderWelcome = () => {
        let text = []
        let testTxt = "Welcome to Zen"
        for (let i = 0; i < testTxt.length; i++) {
            text.push(<h1 key={i} data-opacity={0}>{testTxt[i]}</h1>)
        }
        return text;
    }

    const renderBoxes = () => {
        let routes = ["https://calm-lake-31825.herokuapp.com/", 
        "https://twetmore34.github.io/portfolio-front-end/", 
        "https://oz4tech.github.io/TSG-APP-Project-1/",
        "https://github.com/charmingcharlii/Passivity",
        "https://gentle-fortress-36739.herokuapp.com/", 
        "https://github.com/TWetmore34/department-tracker", 
        "https://twetmore34.github.io/regex-tutorial/"]
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
    <div>
      {renderWelcome()}
        <div data-roundness={1} data-config="3" id="wrapper">
          {renderBoxes()}
        </div>
    </div>
  </div>
)}

export default App