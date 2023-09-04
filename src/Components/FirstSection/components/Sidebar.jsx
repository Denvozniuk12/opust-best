import React from 'react';
import Authors from './components/Authors';
import Month from './components/Month';

function Sidebar() {
    return (
        <div className='wrap w-25 lg-w-full'>
            <Authors />
            <Month />
        </div>
    );
}

export default Sidebar;
