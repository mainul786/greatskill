import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';
import LeftSideNav from '../pages/LeftSideNav/LeftSideNav';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div >
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;