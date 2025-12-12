import React from 'react';
import logo from '../../assets/OIP (1).webp';

const Header = () => {
    return (
        <div className='flex border-e-indigo-100 p-8 gap-4 justify-between w-auto'>
           <img src={logo} className='w-25'></img>
           <h3 className="text-2xl font-bold mt-8 ">PlateShare</h3>
           <ul className='flex gap-6 text-2xl font-bold  mt-8 ml-4'>
            <li>Home</li>
            <li>Features</li>
            <li>Account</li>
            <li>Search Bar</li>
            <li>Added Post</li>
           </ul>
            
        </div>
    );
};

export default Header;