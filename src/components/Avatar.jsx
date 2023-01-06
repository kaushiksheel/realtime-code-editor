import React from 'react'

export const Avatar = ({name}) => {



  return (
    
<div className="relative inline-flex items-center justify-center w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 font-semibold text-xl">
    <span className="font-medium text-gray-600 dark:text-gray-300">{name.split("")[0]}</span>
</div>

  )
}
