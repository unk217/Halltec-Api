import React from 'react'

export function Button(props) {
  return (
    <button className='bg-teal-600 p-1 rounded-lg block  
    mt-1 hover:bg-lime-600 hover:cursor-pointer
     font-bold uppfont-bold uppercase'{...props}/>
  )
}

export default Button
