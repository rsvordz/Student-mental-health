import React from 'react'

const HeroBg = () => {
  return (
    <>
       <div
        className="absolute top-[25%] left-0 w-full h-[260px] "
        style={{
          backgroundImage: 'url("img/KnustR.jpg")',
          backgroundSize: "cover",
          opacity: "0.4",
        }}
      />
    </>
  )
}

export default HeroBg
