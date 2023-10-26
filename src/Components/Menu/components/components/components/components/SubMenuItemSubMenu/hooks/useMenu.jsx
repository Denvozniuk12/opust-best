const useMenu = () => {
    const menuChangeStateStart = (index, subMenuItemSubMenu, subMenuItemSubMenuOpen, subMenuItemSubMenuClose) => {
        subMenuItemSubMenu ? subMenuItemSubMenuOpen(index) : subMenuItemSubMenuClose(index);
    }
    const menuChangeStateFinish = (index, menuRef, subMenuItemSubMenu, CheckSubMenuItemSubMenuOpen, CheckSubMenuItemSubMenuClose) => {
        if(menuRef.current){
            menuRef.current.style.setProperty('--menu-height', menuRef.current.offsetHeight + 'px');
            subMenuItemSubMenu ? CheckSubMenuItemSubMenuOpen(index) : CheckSubMenuItemSubMenuClose(index);
        }
    }
    return {
        menuChangeStateStart,
        menuChangeStateFinish,
    };
}

export default useMenu;