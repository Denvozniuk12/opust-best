import React from 'react';
import useScroll from './hooks/useScroll';
import { arrowUpIcon } from '../../Img/Buttons';

function ArrowUp() {
    const { showButton, isBtnClose, handleButtonClick } = useScroll();
   return (
        <>
            {showButton && (
                <button id='arrow-up' onClick={handleButtonClick} className={"arrow-btn " + (isBtnClose ? "arrow-btn-close" : "")}>
                    <div className='arrow-btn-body'>
                        <div className='arrow-btn-content'>
                            <div className='arrow-btn-icon'>
                                <span className='anticon-arrow-up'>{arrowUpIcon}</span>
                            </div>
                        </div>
                    </div>
                </button>
            )}
        </>
    );
}

export default ArrowUp;
