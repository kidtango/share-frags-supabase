import React from 'react'

import { BiSearchAlt } from 'react-icons/bi'
// interface ISearchBar {

// }
const SearchBar = () => (
  <div className='w-full'>
    <div className='flex justify-center'>
      <div className='relative w-full'>
        <input type={'text'} className='w-full h-6 text-gray-500 rounded-full outline-none ring-2 ring-cornflower-700 indent-2' />
        <button className='absolute right-0 p-1 rounded-r-full bg-cornflower-400 hover:bg-cornflower-300'>
          <span className=''>
            <BiSearchAlt className='text-cornflower-700' />
          </span>
        </button>
      </div>
    </div>
  </div>
)

export default SearchBar
