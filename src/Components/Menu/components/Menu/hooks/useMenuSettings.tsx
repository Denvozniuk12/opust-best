import { useEffect } from 'react';
import { ElementWidthConfig, IWidthElement } from '../../../../../types/data';
import { AppContext } from '../../../../../Context';

const useMenuSettings = (menuRef: React.RefObject<HTMLDivElement>, handleScreenWidthResize: (element: HTMLElement, widthArray: ElementWidthConfig[], defaultWidth: number) => void,
     widthArray: IWidthElement[], defaultWidth: number, isShowMenu: (value: AppContext, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) => void, 
     value: AppContext | undefined, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    useEffect(() => {
        const currentMenuRef: HTMLDivElement | null = menuRef.current;
        if(currentMenuRef){
            handleScreenWidthResize(currentMenuRef, widthArray, defaultWidth);
            window.addEventListener('resize', function () { handleScreenWidthResize(currentMenuRef, widthArray, defaultWidth); });
        }
        return () => {
            if(currentMenuRef){
                window.removeEventListener('resize', function () { handleScreenWidthResize(currentMenuRef, widthArray, defaultWidth); });
            }
        };
    }, [menuRef.current]);

    useEffect(() => {
        if(value) isShowMenu(value, setMenuOpen);
    }, [value && value.showMenu])
}

export default useMenuSettings;