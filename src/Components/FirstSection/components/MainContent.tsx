import React from 'react';
import MainContentSlider from './components/MainContentSlider';
import Books from './components/Books';
import Novels from './components/Novels';
import Categories from './components/Categories';

function MainContent() {
    return (
        <div className='wrap w-75 lg-w-full'>
            <MainContentSlider />
            <Books />
            <Novels />
            <Categories />
        </div>
    );
}

export default MainContent;
