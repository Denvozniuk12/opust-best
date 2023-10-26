import React from "react";
import { useEffect } from "react";
import useMenu from "./hooks/useMenu";

function SubMenu (props) {
  const { children, itemName, isOpenSubMenu, subMenu, menuRef } = props;

  const { menuChangeStateStart, menuChangeStateFinish, checkSubMenu, subMenuHidden, intermediateSubMenuHidden, isAnimating } = useMenu();

  useEffect(() => {
    menuChangeStateStart(subMenu);
  }, [subMenu]);

  useEffect(() => {
    menuChangeStateFinish(menuRef, subMenu);
  }, [intermediateSubMenuHidden]);

    return (
        <li 
          className={`ant-menu-submenu${subMenu ? " ant-menu-submenu-open" : ""}`}
          role="none"
        >
            <div 
              role="menuitem" 
              className="ant-menu-submenu-title"
              tabIndex="-1" aria-expanded="true"
              aria-haspopup="true"
              style={{paddingLeft: "24px"}}
              data-menu-id="rc-menu-uuid-38938-1-1"
              aria-controls="rc-menu-uuid-38938-1-1-popup"
              onClick={(e) => {
                if (!isAnimating) {
                    isOpenSubMenu(!subMenu);
                }
              }}
            >
                <span className="ant-menu-title-content" id="span-1">
                    <p className="ant-menu-title-content-p">{itemName}</p>
                </span>
                <i className="ant-menu-submenu-arrow"></i>
            </div>
            <ul 
              className={`ant-menu-sub${subMenuHidden ? " ant-menu-hidden" : ""}${checkSubMenu ? " ant-menu-sub-open" : " ant-menu-sub-close"}`}
              role="menu"
              id="rc-menu-uuid-38938-1-1-popup"
              data-menu-list="true"
              ref={menuRef}
            >
                {children}
            </ul>
        </li>
    );
}

export default SubMenu;


