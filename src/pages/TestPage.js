import React, {useEffect} from 'react'

const TestPage = ({ color }) => {
  useEffect(() => {
    let background = document.querySelector("body");
    background.style.backgroundColor = color;
  },[])
  
  return (
    <div>TestPage</div>
  )
}

export default TestPage