import React from 'react';
import { useEffect, useState } from 'react';

function ArrowUp() {
    const [showButton, setShowButton] = useState(false);
    const [isBtnClose, setIsBtnClose] = useState(false);

    useEffect(() => {
        let timeoutId = null;
        let isButtonVisible = false; // Додано нову змінну для відстеження видимості кнопки

        const handleClose = () => {
            setIsBtnClose(() => {return true;});
            setTimeout(() => {
                setShowButton(() => {return false;});
                setIsBtnClose(() => {return false;});
            }, 300);
        }

        const handleScroll = () => {
            const scrollDifference = window.pageYOffset;
            if (scrollDifference >= 93 && !isButtonVisible) {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                isButtonVisible = true;
                setShowButton(true);
            } else if (scrollDifference < 100 && isButtonVisible) {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                isButtonVisible = false;
                handleClose();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [showButton]);

    const handleButtonClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };
   const arrowUpSvg = (<svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-up" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg>);
   return (
        <>
            {showButton && (
                <button id='arrow-up' onClick={handleButtonClick} className={"arrow-btn " + (isBtnClose ? "arrow-btn-close" : "")}>
                    <div className='arrow-btn-body'>
                        <div className='arrow-btn-content'>
                            <div className='arrow-btn-icon'>
                                <span className='anticon-arrow-up'>{arrowUpSvg}</span>
                            </div>
                        </div>
                    </div>
                </button>
            )}
        </>
    );
}

export default ArrowUp;
