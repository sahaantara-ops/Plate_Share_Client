import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import LatestPost from '../../Components/LatestPost/LatestPost';


const HomeLayout = () => {
    return (
        <div>
            <header>
               <Header></Header>
               <section className='w-11/12 mx-auto my-3'>
                 <LatestPost></LatestPost>
              </section>
              
            </header>
            <main>
               <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;