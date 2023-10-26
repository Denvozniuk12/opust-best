import React from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';


function FirstSection() {
    return (
        <div className='flex lg-block'>
            <MainContent />
            <Sidebar />
        </div>
    );
}

export default FirstSection;
