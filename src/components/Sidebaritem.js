import React from 'react'

const Sidebaritem = ({name, active, handleClick}) => {
  return (
    <button className={`sidebar-item ${active ? 'active' : null} `} onClick={handleClick} > 
    {name}
    </button>
  )
}


export default Sidebaritem