import { useEffect } from 'react';
import { IScreenWidthData } from '../types/data';
const useResizeListener = (handleScreenWidthResizeForSlides: (screenWidthArray: IScreenWidthData[]) => void, screenWidthData: IScreenWidthData[]) => {
    useEffect(() => {
        handleScreenWidthResizeForSlides(screenWidthData);
        window.addEventListener('resize', function() {
            handleScreenWidthResizeForSlides(screenWidthData);
        });
        return () => {
            window.removeEventListener('resize', function() {
                handleScreenWidthResizeForSlides(screenWidthData);
            });
        };
    }, []);
}

export default useResizeListener;