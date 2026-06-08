import React from 'react'
import { Search,X } from 'lucide-react'

const SearchBar = ({value,handleSearch,reset,onChange}) => {
  return (
    <div className='flex justify-between items-center bg-slate-100 rounded-xl py-2 px-4 gap-2'>
      <input value={value} type="text" className='outline-none' placeholder='Search notes' onChange={onChange}/>

        <button className={`text-black/80  cursor-pointer hover:text-black ${value ? "opacity-100" : "opacity-0"} transition-all duration-500`} onClick={reset}><X size={16}/></button>
      <button className='text-black/80  cursor-pointer hover:text-black' onClick={handleSearch}><Search size={16}/></button>
      
    </div>
  )
}

export default SearchBar
