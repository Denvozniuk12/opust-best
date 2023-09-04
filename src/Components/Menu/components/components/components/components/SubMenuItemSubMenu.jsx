import React, {useEffect, useLayoutEffect} from "react";
import Context from "../../../../../../Context";

function SubMenuItemSubMenu (props) {
    const {children, index, itemName, id, /*height,*/ isOpenSubMenuItemSubMenu, subMenuItemSubMenu, subMenuItemSubMenuOpen,
          subMenuItemSubMenuClose, checkSubMenu, CheckSubMenuItemSubMenuOpen, CheckSubMenuItemSubMenuClose, subMenuHidden,
          intermediateSubMenuHidden, isAnimating, menuRef } = props;
    
    // useEffect(() => {
    //     if(menuRef.current){
    //         menuRef.current.style.setProperty('--menu-height', height + 'px');
    //     }
    // }, []);
    
    useEffect(() => {
        if(subMenuItemSubMenu){
            subMenuItemSubMenuOpen(index);
        }
        else {
            subMenuItemSubMenuClose(index);
        }
        
    }, [subMenuItemSubMenu]);

    useLayoutEffect(() => {
        if(menuRef.current){
            menuRef.current.style.setProperty('--menu-height', menuRef.current.offsetHeight + 'px');
            if(subMenuItemSubMenu){
                CheckSubMenuItemSubMenuOpen(index);
            }
            else {
                CheckSubMenuItemSubMenuClose(index);
            }
        }
    }, [intermediateSubMenuHidden]);
    return (
        <li role="none" className={"ant-menu-submenu" + (subMenuItemSubMenu ? " ant-menu-submenu-open" : "")}>
            <div 
              role="menuitem"
              className="ant-menu-submenu-title"
              tabIndex="-1"
              data-menu-id={"rc-menu-uuid-38938-1-" + id}
              aria-expanded="false"
              aria-haspopup="true"
              aria-controls={"rc-menu-uuid-38938-1-" + id + "-popup"}
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
              id={"rc-menu-uuid-82823-1-"+ id +"-popup"}
              data-menu-list="true"
              ref={menuRef}
            >
               {children}
            </ul>
        </li>
    );
}

export default SubMenuItemSubMenu;