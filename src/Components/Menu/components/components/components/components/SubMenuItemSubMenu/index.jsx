import React, {useEffect} from "react";
import useMenu from "./hooks/useMenu";

function SubMenuItemSubMenu (props) {
    const {children, index, itemName, dataMenuId, isOpenSubMenuItemSubMenu, subMenuItemSubMenu, subMenuItemSubMenuOpen,
          subMenuItemSubMenuClose, checkSubMenu, CheckSubMenuItemSubMenuOpen, CheckSubMenuItemSubMenuClose, subMenuHidden,
          intermediateSubMenuHidden, isAnimating, menuRef } = props;
        
    const { menuChangeStateStart, menuChangeStateFinish } = useMenu();

    useEffect(() => {
        menuChangeStateStart(index, subMenuItemSubMenu, subMenuItemSubMenuOpen, subMenuItemSubMenuClose);
    }, [subMenuItemSubMenu]);

    useEffect(() => {
        menuChangeStateFinish(index, menuRef, subMenuItemSubMenu, CheckSubMenuItemSubMenuOpen, CheckSubMenuItemSubMenuClose);
    }, [intermediateSubMenuHidden]);
    
    return (
        <li role="none" className={"ant-menu-submenu" + (subMenuItemSubMenu ? " ant-menu-submenu-open" : "")}>
            <div 
              role="menuitem"
              className="ant-menu-submenu-title"
              tabIndex="-1"
              data-menu-id={"rc-menu-uuid-38938-1-" + dataMenuId}
              aria-expanded="false"
              aria-haspopup="true"
              aria-controls={"rc-menu-uuid-38938-1-" + dataMenuId + "-popup"}
              style={{paddingLeft: "48px"}}
              onClick={(e) => {
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