import React from 'react';
import BestAuthor from './components/BestAuthor';
import BestBooks from './components/BestBooks';


function SecondSection() {
    return (
        <div className='flex w-full lg-block'>
            <BestAuthor />
            <BestBooks />
        </div>
    );
}

export default SecondSection;
