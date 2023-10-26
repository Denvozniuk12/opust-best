import { useEffect, useState } from "react";

const useScroll = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [isBtnClose, setIsBtnClose] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    let isButtonVisible: boolean = false;

    const handleClose = () => {
      setIsBtnClose(true);
      timeoutId = setTimeout(() => {
        setShowButton(false);
        setIsBtnClose(false);
      }, 300);
    };

    const handleScroll = () => {
      const scrollDifference: number = window.pageYOffset;
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
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
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
    handleButtonClick,
  };
};

export default useScroll;
