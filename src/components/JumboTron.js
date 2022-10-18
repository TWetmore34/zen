import React, { useState } from 'react'
import "./JumboStyles.css"
const JumboTron = () => {
  const imgList = ["https://picsum.photos/200","https://picsum.photos/200","https://picsum.photos/200"]
  let idx = 0;
  const [selected, setSelected] = useState(imgList[0]) 
  
  setInterval(() => {
    idx = idx < imgList.length ? idx +1 : 0
    setSelected(imgList[idx])
    console.log(idx)
  },3000)

  return (
    <div className='img-container'>
      <img className='img' src={selected}></img>
    </div>
  )
}

export default JumboTron