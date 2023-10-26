import { useState } from "react";

const useScreenResize = (initialSlidesState = null) => {
    const [slPerView, setSlPerView] = useState(initialSlidesState);

    const handleScreenWidthResizeForSlides = (screenWidthArray) => {
        const currentScreenWidth = window.innerWidth;
        let desktopVersion = true;
        for(let i = 0; i < screenWidthArray.length; i++) {
            const screenWidth = screenWidthArray[i];
            if(currentScreenWidth < screenWidth.width) {
                setSlPerView(screenWidth.slidesPerView);
                desktopVersion = false;
                break;
            }
        }
        desktopVersion && setSlPerView(initialSlidesState);
    }

    const handleScreenWidthResize = (element, widthArray, defaultWidth) => {
        const currentScreenWidth = window.innerWidth;
        let isDefaultWidth = true;
        for(let i = 0; i < widthArray.length; i++){
            const currentWidthArrayElement = widthArray[i];
            if(currentScreenWidth < currentWidthArrayElement.screenWidth){
                element.style = `width: ${currentWidthArrayElement.elementWidth}px`;
                isDefaultWidth = false;
                break;
            }
        }
        isDefaultWidth && (element.style = `width: ${defaultWidth}px`);
    }

    return { slPerView, handleScreenWidthResizeForSlides, handleScreenWidthResize };
}

export default useScreenResize;