import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBox = () => {
    return (
        <form className=' rounded-xl bg-[#242434] flex items-center'>
            <input type="text" placeholder='Search....' className='px-4 py-1 bg-transparent outline-none w-full md:w-[500px]' />

            <button
                type='submit'
                className='px-3'
            >
                <FaSearch />
            </button>
        </form>
    )
}

export default SearchBox