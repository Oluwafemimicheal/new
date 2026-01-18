import React from 'react'

const PryBtn = ({ text = "Click Me" }) => {
  return (
    <button className="py-2 px-4 font-semibold text-gray-400 hover:text-black  border-2 border-blue-300 hover:bg-blue-300 rounded transition cursor-pointer">{text}</button>
  )
}

export const SecBtn = ({ text = "Click Me" }) => {
  return (
    <button className="py-2 px-4 font-semibold text-black hover:text-gray-400 bg-blue-300 border-2 border-transparent hover:bg-transparent hover:border-blue-300 rounded transition cursor-pointer">{text}</button>
  )
}
export default PryBtn
