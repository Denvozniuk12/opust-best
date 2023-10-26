import useSubMenuItemSubMenu from './useSubMenuItemSubMenu';

const useSubMenu = (setSubMenu: React.Dispatch<React.SetStateAction<boolean>>, subMenuItemSubMenuRef1: React.RefObject<HTMLUListElement>,
     subMenuItemSubMenuRef2: React.RefObject<HTMLUListElement>, subMenuRef1: React.RefObject<HTMLUListElement>,
     subMenuItemSubMenuArray: boolean[], setSubMenuItemSubMenuArray: React.Dispatch<React.SetStateAction<boolean[]>>) => {
    const { handlerClickSubMenuItemSubMenu } = useSubMenuItemSubMenu(setSubMenuItemSubMenuArray);
    const handlerClickSubMenu = (val: boolean) => {
        if(val === false){
            
            setTimeout(() => {
                setSubMenu(() => val);
                if(subMenuItemSubMenuRef1.current && subMenuItemSubMenuRef2.current && subMenuRef1.current){
                    if(subMenuItemSubMenuRef1.current.offsetHeight > 0 && subMenuItemSubMenuRef2.current.offsetHeight > 0) {
                        subMenuRef1.current.style.setProperty('--menu-height', (subMenuRef1.current.offsetHeight - (subMenuItemSubMenuRef1.current.offsetHeight + subMenuItemSubMenuRef2.current.offsetHeight)) + 'px');
                    }
                    else if(subMenuItemSubMenuRef1.current.offsetHeight > 0) {
                        subMenuRef1.current.style.setProperty('--menu-height', (subMenuRef1.current.offsetHeight - subMenuItemSubMenuRef1.current.offsetHeight) + 'px');
                    }
                    else if(subMenuItemSubMenuRef2.current.offsetHeight > 0) {
                        subMenuRef1.current.style.setProperty('--menu-height', (subMenuRef1.current.offsetHeight - subMenuItemSubMenuRef2.current.offsetHeight) + 'px');
                    }
                }
            }, 100);
            subMenuItemSubMenuArray.map((v, i) => {
                if(v === true){
                    return handlerClickSubMenuItemSubMenu(i, false);
                }
                return v;
            });
        }
        else {
            setSubMenu(() => val);
        }
    }
    
    return { handlerClickSubMenu };
}

export default useSubMenu;