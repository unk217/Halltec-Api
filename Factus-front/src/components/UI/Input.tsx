import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: Props) {
  return (
    
    <input className='bg-zinc-700 p-3 rounded-lg 
    block  mb-3 hover:bg-stone-400 
    hover:cursor-pointer text-xl' {...props}/>
  )
}

export default Input
