import useSubMenuItemSubMenu from './useSubMenuItemSubMenu';

const useSubMenu = (setSubMenu, subMenuItemSubMenuRef1, subMenuItemSubMenuRef2, subMenuRef1, subMenuItemSubMenuArray, setSubMenuItemSubMenuArray) => {
    const { handlerClickSubMenuItemSubMenu } = useSubMenuItemSubMenu(setSubMenuItemSubMenuArray);
    const handlerClickSubMenu = (val) => {
        if(val === false){
            
            setTimeout(() => {
                setSubMenu(() => val);
                if(subMenuItemSubMenuRef1.current.offsetHeight > 0 && subMenuItemSubMenuRef2.current.offsetHeight > 0) {
                    subMenuRef1.current.style.setProperty('--menu-height', (subMenuRef1.current.offsetHeight - (subMenuItemSubMenuRef1.current.offsetHeight + subMenuItemSubMenuRef2.current.offsetHeight)) + 'px');
                }
                else if(subMenuItemSubMenuRef1.current.offsetHeight > 0) {
                    subMenuRef1.current.style.setProperty('--menu-height', (subMenuRef1.current.offsetHeight - subMenuItemSubMenuRef1.current.offsetHeight) + 'px');
                }
                else if(subMenuItemSubMenuRef2.current.offsetHeight > 0) {
                    subMenuRef1.current.style.setProperty('--menu-height', (subMenuRef1.current.offsetHeight - subMenuItemSubMenuRef2.current.offsetHeight) + 'px');
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