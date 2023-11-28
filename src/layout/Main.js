import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';
import LeftSideNav from '../pages/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;