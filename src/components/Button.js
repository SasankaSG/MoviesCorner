import React, { Children } from 'react'

export const Button = ({children}) => {
  return (
    <button className='w-64 text-xl text-white bg-gradient-to-r from-blue-400 via-blue-700 to-blue-900 rounded-lg px-5 py-3 mr-2 mb-2 font-medium'>{children}</button>
  )
}
