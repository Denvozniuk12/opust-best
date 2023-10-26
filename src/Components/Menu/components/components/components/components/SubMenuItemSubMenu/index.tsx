import React from "react";
import useMenu from "./hooks/useMenu";
import useSubMenuItemSubMenuInitial from "./hooks/useSubMenuItemSubMenuInitial";

interface ISubMenuItemSubMenu {
    children: any;
    index: number;
    itemName: string;
    dataMenuId: number;
    isOpenSubMenuItemSubMenu: (el: number, val: boolean) => void;
    subMenuItemSubMenu: boolean;
    subMenuItemSubMenuOpen: (index: number) => void;
    subMenuItemSubMenuClose: (index: number) => void;
    checkSubMenu: boolean;
    CheckSubMenuItemSubMenuOpen: (index: number) => void;
    CheckSubMenuItemSubMenuClose: (index: number) => void;
    subMenuHidden: boolean;
    intermediateSubMenuHidden: boolean;
    isAnimating: boolean;
    menuRef: React.RefObject<HTMLUListElement>;
}

const SubMenuItemSubMenu: React.FC<ISubMenuItemSubMenu> = (props) => {
    const {children, index, itemName, dataMenuId, isOpenSubMenuItemSubMenu, subMenuItemSubMenu, subMenuItemSubMenuOpen,
          subMenuItemSubMenuClose, checkSubMenu, CheckSubMenuItemSubMenuOpen, CheckSubMenuItemSubMenuClose, subMenuHidden,
          intermediateSubMenuHidden, isAnimating, menuRef } = props;
        
    const { menuChangeStateStart, menuChangeStateFinish } = useMenu();

    useSubMenuItemSubMenuInitial(menuChangeStateStart, index, subMenuItemSubMenu, subMenuItemSubMenuOpen, subMenuItemSubMenuClose,
        menuChangeStateFinish, menuRef, CheckSubMenuItemSubMenuOpen, CheckSubMenuItemSubMenuClose, intermediateSubMenuHidden);

    return (
        <li role="none" className={"ant-menu-submenu" + (subMenuItemSubMenu ? " ant-menu-submenu-open" : "")}>
            <div 
              role="menuitem"
              className="ant-menu-submenu-title"
              tabIndex={-1}
              data-menu-id={"rc-menu-uuid-38938-1-" + dataMenuId}
              aria-expanded="false"
              aria-haspopup="true"
              aria-controls={"rc-menu-uuid-38938-1-" + dataMenuId + "-popup"}
              style={{paddingLeft: "48px"}}
              onClick={() => {
                if (!isAnimating) {
                    isOpenSubMenuItemSubMenu(index, !subMenuItemSubMenu);
                }
              }}
            >
                <span className="ant-menu-title-content">
                    <p className="ant-menu-title-content-p">{itemName}</p>
                </span>
                <i className="ant-menu-submenu-arrow"></i>
            </div>
            <ul 
              className={"ant-menu-sub" + (subMenuHidden ? " ant-menu-hidden" : "") + (checkSubMenu ? " ant-menu-sub-open" : " ant-menu-sub-close")}
              role="menu"
              id={"rc-menu-uuid-82823-1-"+ dataMenuId +"-popup"}
              data-menu-list="true"
              ref={menuRef}
            >
               {children}
            </ul>
        </li>
    );
}

export default SubMenuItemSubMenu;