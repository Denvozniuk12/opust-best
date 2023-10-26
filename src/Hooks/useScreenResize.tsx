import { useState } from "react";
import { ElementWidthConfig } from "../types/data";

interface ScreenWidthConfig {
  width: number;
  slidesPerView: number;
}


interface ScreenResizeHook {
  slPerView: number;
  handleScreenWidthResizeForSlides: (screenWidthArray: ScreenWidthConfig[]) => void;
  handleScreenWidthResize: (element: HTMLElement, widthArray: ElementWidthConfig[], defaultWidth: number) => void;
}

const useScreenResize = (initialSlidesState: number = 0): ScreenResizeHook => {
  const [slPerView, setSlPerView] = useState<number>(initialSlidesState);

  const handleScreenWidthResizeForSlides = (screenWidthArray: ScreenWidthConfig[]) => {
    const currentScreenWidth: number = window.innerWidth;
    let desktopVersion: boolean = true;
    for (let i = 0; i < screenWidthArray.length; i++) {
      const screenWidth: ScreenWidthConfig = screenWidthArray[i];
      if (currentScreenWidth < screenWidth.width) {
        setSlPerView(screenWidth.slidesPerView);
        desktopVersion = false;
        break;
      }
    }
    if (desktopVersion) {
      setSlPerView(initialSlidesState);
    }
  };

  const handleScreenWidthResize = (element: HTMLElement | null, widthArray: ElementWidthConfig[], defaultWidth: number) => {
    const currentScreenWidth: number = window.innerWidth;
    if (element) {
      let isDefaultWidth: boolean = true;
      for (let i = 0; i < widthArray.length; i++) {
        const currentWidthArrayElement: ElementWidthConfig = widthArray[i];
        if (currentScreenWidth < currentWidthArrayElement.screenWidth) {
          element.style.width = `${currentWidthArrayElement.elementWidth}px`;
          isDefaultWidth = false;
          break;
        }
      }
      if (isDefaultWidth) {
        element.style.width = `${defaultWidth}px`;
      }
    }
  };

  return { slPerView, handleScreenWidthResizeForSlides, handleScreenWidthResize };
};

export default useScreenResize;
