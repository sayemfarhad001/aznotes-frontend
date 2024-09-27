import React from 'react'

function Home(props) {
  return (
    <div className={`text-${props.mode==='light'?'dark':'light'}`} style={{marginTop:"100px"}}>
      <strong>This is Home</strong>
    </div>
  )
}

export default Home
