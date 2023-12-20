import React from 'react'

const Nav = ({icon,title,onClick}) => {
  return (
    <button className='flex items-center px-[30px]  py-[15px] hover:bg-gray-200' onClick={onClick}>
        <img src={icon} alt={title} className='pr-[25px]' />
        {title}
    </button>
  )
}

export default Nav