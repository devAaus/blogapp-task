
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ handleSearch, searchQuery, setSearchQuery }) => {
    return (
        <form className='rounded-xl bg-[#242434] flex items-center' onSubmit={handleSearch}>

            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search blogs ....'
                className='px-4 py-1 bg-transparent outline-none w-full md:w-[500px]'
            />

            <button
                type='submit'
                className='px-3'
            >
                <FaSearch />
            </button>
        </form>
    );
};

export default SearchBox;
