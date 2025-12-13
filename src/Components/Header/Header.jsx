import React from 'react';
import logo from '../../assets/OIP (1).webp';
import { NavLink } from 'react-router';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
    return (
        <div className='flex border-e-indigo-100 p-8 gap-4 justify-between w-auto'>
           <img src={logo} className='w-25'></img>
           <h3 className="text-2xl font-bold mt-8 ">PlateShare</h3>

            
           <ul className='flex gap-6 text-2xl font-bold  mt-8 ml-4'>
            <li><NavLink to ={'/' } className={({isActive}) => (isActive ? "text-blue-200" : "")}>Home</NavLink></li>
            <li><NavLink to ={'/features'} className={({isActive}) => (isActive ? "text-blue-200" : "")}>Features</NavLink></li>
            
            <li><button className="btn btn-dash"><NavLink to={'/auth'} className={({isActive}) => (isActive ? "text-blue-200" : "")}>LogIn</NavLink></button></li>
            <li><SearchBar></SearchBar></li>
            
           </ul>
            
        </div>
    );
};

export default Header;