import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
               <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomeLayout;