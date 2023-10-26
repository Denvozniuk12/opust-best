import { useEffect } from "react";

type TUseSubMenuItemSubMenuInitial = (
    menuChangeStateStart: (index: number, subMenuItemSubMenu: boolean, subMenuItemSubMenuOpen: (index: number) => void, subMenuItemSubMenuClose: (index: number) => void) => void,
    index: number,
    subMenuItemSubMenu: boolean,
    subMenuItemSubMenuOpen: (index: number) => void,
    subMenuItemSubMenuClose: (index: number) => void,
    menuChangeStateFinish: (index: number, menuRef: React.RefObject<HTMLUListElement>, subMenuItemSubMenu: boolean, CheckSubMenuItemSubMenuOpen: (index: number) => void, CheckSubMenuItemSubMenuClose: (index: number) => void) => void,
    menuRef: React.RefObject<HTMLUListElement>,
    CheckSubMenuItemSubMenuOpen: (index: number) => void,
    CheckSubMenuItemSubMenuClose: (index: number) => void,
    intermediateSubMenuHidden: boolean
) => void;

const useSubMenuItemSubMenuInitial: TUseSubMenuItemSubMenuInitial = (menuChangeStateStart, index, subMenuItemSubMenu, subMenuItemSubMenuOpen, subMenuItemSubMenuClose,
      menuChangeStateFinish, menuRef, CheckSubMenuItemSubMenuOpen, CheckSubMenuItemSubMenuClose, intermediateSubMenuHidden) => {
    useEffect(() => {
        menuChangeStateStart(index, subMenuItemSubMenu, subMenuItemSubMenuOpen, subMenuItemSubMenuClose);
    }, [subMenuItemSubMenu]);

    useEffect(() => {
        menuChangeStateFinish(index, menuRef, subMenuItemSubMenu, CheckSubMenuItemSubMenuOpen, CheckSubMenuItemSubMenuClose);
    }, [intermediateSubMenuHidden]);

}

export default useSubMenuItemSubMenuInitial;