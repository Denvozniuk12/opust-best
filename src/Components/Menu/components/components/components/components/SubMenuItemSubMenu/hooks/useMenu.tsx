const useMenu = () => {
    const menuChangeStateStart = (index: number, subMenuItemSubMenu: boolean,
          subMenuItemSubMenuOpen: (index: number) => void, subMenuItemSubMenuClose: (index: number) => void) => 
    {
        subMenuItemSubMenu ? subMenuItemSubMenuOpen(index) : subMenuItemSubMenuClose(index);
    }
    const menuChangeStateFinish = (index: number, menuRef: React.RefObject<HTMLUListElement>, subMenuItemSubMenu: boolean,
          CheckSubMenuItemSubMenuOpen: (index: number) => void, CheckSubMenuItemSubMenuClose: (index: number) => void) => 
    {
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