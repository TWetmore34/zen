import React, { useEffect, useState } from 'react'
import "./JumboStyles.css"
const JumboTron = () => {
    let [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(["https://picsum.photos/200","https://picsum.photos/200","https://picsum.photos/200"]) 

  return (
    <div className='slideshow-container'>
            <img src={selected[idx]} className="img" />
        <div className='fade'>
            <div className='numbertext'>{idx + 1} / {selected.length}</div>
            <div className='txt'>Text here</div>
        </div>

        <div className='next' onClick={() => {
            setIdx(selected[idx + 1] ? idx+1 : 0)
            }}>&#10094;</div>
        <div className='prev' onClick={() => {
            setIdx(selected[idx-1] ? idx-1 : selected.length - 1)
            }}>&#10094;</div>

        <div style={{textAlign: "center"}}>
            <div className='dot' onClick={() => {
            setIdx(0)
            }}></div>

            <div className='dot' onClick={() => {
            setIdx(1)
            }}></div>

            <div className='dot' onClick={() => {
            setIdx(2)
            }}></div>
        </div>
    </div>
  )
}

export default JumboTron