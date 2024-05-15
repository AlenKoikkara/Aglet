import React, { useEffect, useRef,useState } from "react";

import './ColorWarp.scss';

function ColorWarp({recwidth, lines}) {
  const rect = useRef(null);
  const [sqWidth, setSqWidth] = useState();
  const [noSquares, setNoSquares] = useState();
  const [randomNo, setRandomNo] = useState();
  const array = [0,1,4, 10, 13, 14, 5, 8]


  function squareCalc() {
    const width = (rect.current.offsetWidth * 20)/100; 
    const noSquares = rect.current.offsetWidth / width;
    setSqWidth(width);
    setNoSquares(Math.floor(noSquares*3));
  }
  
  function randomSquare() {
    setRandomNo(Math.floor(Math.random() * noSquares));
    const element = document.getElementById(randomNo);
    if (!array.includes(randomNo)) {
      element?.classList.add('squareanim')
    }
  }

  useEffect(() => {
    squareCalc()
    randomSquare()
    return () => {
      
    }
  }, [noSquares, randomNo, recwidth])
  

  return (
    <div className='colorWarpWrapper'>
      <div className='body' ref={rect}>
        {[...Array(noSquares)].map((x, i) => (
          <div className="tinysquares" key={i} id={i} style={{width:`${sqWidth}px`, height:`${sqWidth}px`}}></div>
        ))}
      </div>
    </div>
  )
}

export default ColorWarp