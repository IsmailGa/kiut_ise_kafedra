import React from 'react'

const Container = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="container lg:65px mx-auto">{children}</div>
  )
}

export default Container