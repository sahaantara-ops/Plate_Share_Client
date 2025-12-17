import React from 'react';
import logo from '../../assets/OIP (1).webp';
import { Link } from 'react-router';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
    return (
        <div className='flex border-e-indigo-100 p-8 gap-4 justify-between w-auto'>
           <img src={logo} className='w-25'></img>
           <h3 className="text-2xl font-bold mt-8 ">PlateShare</h3>

            
           <ul className='flex gap-6 text-2xl font-bold  mt-8 ml-4'>
            <li><Link to ={'/' } className={({isActive}) => (isActive ? "text-blue-200" : "")}>Home</Link></li>
            <li><Link to ={'/allfoods'} className={({isActive}) => (isActive ? "text-blue-200" : "")}>All Foods</Link></li>
            
            <li><button className="btn btn-dash"><Link to={"auth/signin"} className={({isActive}) => (isActive ? "text-blue-200" : "")}>SignIn</Link></button></li>
            <li><SearchBar></SearchBar></li>
            <li><Link to={'/newposts/addposts'}>New Post</Link></li>
            
           </ul>
            
        </div>
    );
};

export default Header;