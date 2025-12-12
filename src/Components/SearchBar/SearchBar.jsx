import React from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    return (
        <div className='flex justify-center p-1  bg-stone-400 rounded-3xl w-50 h-10'>
            <IoIosSearch className='item-center' />
            <input type='text' className='w-full h-full text-1xl p-2'  /> 
            
        </div>
    );
};

export default SearchBar;