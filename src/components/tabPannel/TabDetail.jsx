import React from 'react'

export const TabDetail = (props) => {
    const {children, value, index} = props

  return (
    <div>
        {
            value == index && (
                <>{ children }</>
            )
        }
            {/* <h1>Hello THere I am from jaipur</h1> */}
    </div>
  )
}
