import {useEffect, useState} from "react";

const useScroll = () => {
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

    return {
        showButton,
        isBtnClose,
        // handleClose,
        // handleScroll,
        handleButtonClick,
    };
}

export default useScroll;