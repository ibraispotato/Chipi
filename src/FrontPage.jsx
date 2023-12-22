import React, { useState } from 'react'
import vvo from "./video/Chipi chipi chapa chapa cat.mp4" 


// import Video form "./video/CHIPI CHIPI CHAPA CHAPA DUBI DUBI (1H).mp4"
const FrontPage = () => {
  const [tvvl , setTvv] = useState()
  const [tvvls , setTvvs] = useState(false)

  function click() {
    setTvv(<video src={vvo} autoPlay loop />)
    setTvvs(prev => !prev)
  }
  return (
    <div>
       {tvvl}
      <button onClick={click} className={`btn ${tvvls === true ? "active" : ""}`}>you won't regret it</button>
    </div>
  )
}

export default FrontPage
