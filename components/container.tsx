import React from 'react'

const Container = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="max-w-[1440px] w-full mx-auto px-[65px]">{children}</div>
  )
}

export default Container