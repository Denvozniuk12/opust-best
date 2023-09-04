import React from "react";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

function SubMenu (props) {
  const { children, itemName, isOpenSubMenu, subMenu, menuRef } = props;
  const [checkSubMenu, setCheckSubMenu] = useState(false);
  const [subMenuHidden, setSubMenuHidden] = useState(false);
  const [intermediateSubMenuHidden, setIntermediateSubMenuHidden] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  //const menuRef = useRef(null);

  useEffect(() => {
    if(subMenu){
      setIsAnimating(true);
      setSubMenuHidden((prevState) => prevState === true ? false : prevState);
      setIntermediateSubMenuHidden((prevState) => prevState === true ? false : prevState);
    }
    else {
      setIsAnimating(true);
      setIntermediateSubMenuHidden((prevState) => prevState === false ? true : prevState);
    }
    
  }, [subMenu]);

  useLayoutEffect(() => {
    if(menuRef.current){
      if(subMenu){
        menuRef.current.style.setProperty('--menu-height', menuRef.current.offsetHeight + 'px');
        setCheckSubMenu((prevState) => prevState === false ? true : prevState);
        setTimeout(() => {
          setIsAnimating(false);
        }, 250);
      }
      else {
        setCheckSubMenu((prevState) => prevState === true ? false : prevState);
        setTimeout(() => {
          setSubMenuHidden((prevState) => prevState === false ? true : prevState);
        }, 150);
        setTimeout(() => {
          setIsAnimating(false);
        }, 160);
      }
    }
  }, [intermediateSubMenuHidden]);

    return (
        <li 
          className={"ant-menu-submenu" + (subMenu ? " ant-menu-submenu-open" : "")}
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
              className={"ant-menu-sub" + (subMenuHidden ? " ant-menu-hidden" : "") + (checkSubMenu ? " ant-menu-sub-open" : " ant-menu-sub-close")}
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


