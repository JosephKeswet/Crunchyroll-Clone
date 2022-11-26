import React from 'react'

const DropdownItems = ({list,color}) => {
   
  return (
    <div>
        <ul className={`flex flex-col ${color ? 'text-gray-200' : 'text-white'} text-base`}>
            {list.map((item) => (<li className='w-52 pl-5 cursor-pointer hover:bg-gray-800 font-Poppins hover:rounded-sm text-left flex items-center h-12'>{item}</li>))}
        </ul>
    </div>
  )
}

export default DropdownItems