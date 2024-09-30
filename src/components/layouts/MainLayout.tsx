import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../fragments/guest/nav';


const MainLayout: React.FC = () => {
    return (
        <div className='font-poppins'>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
